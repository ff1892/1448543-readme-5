import { BadRequestException, Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create/create-post-content.dto';
import { randomUUID } from 'node:crypto';
import { PostStatus } from '@project/types';
import { ContentEntityFactory } from './content-entity.factory';
import { PostErrorMessage } from './post.constant';
import { UpdatePostCommonDto } from './dto/update';
import { PostCommonEntity, PostContentEntity } from './entity';
import { fillDto } from '@project/helpers';
import { PostContentRepository } from './repository/post-content.repository';
import { PostRdo, PostContentRdo } from './rdo';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly postContentRepository: PostContentRepository
  ) {}

  public async create(dto: CreatePostDto) {
    const now = new Date();
    const { tags, type, ...content } = dto;

    const userId = randomUUID();

    const newPostCommonData = {
      tags: tags,
      type: type,
      userId,
      originUserId: userId,
      createdAt: now,
      publishedAt: now,
      status: PostStatus.Published,
      isReposted: false,
    };

    const newCommonEntity = new PostCommonEntity(newPostCommonData);
    const savedCommonPost = await this.postRepository.save(newCommonEntity);
    const commonPostDto = fillDto(PostRdo, savedCommonPost.toPOJO());

    const newContentEntity = new ContentEntityFactory(
      type,
      content
    ).getContent();

    const savedContentPost = await this.postContentRepository.save(
      newContentEntity
    );

    const contentPostDto = fillDto(PostContentRdo, savedContentPost.toPOJO());

    return { ...commonPostDto, ...contentPostDto };
  }

  public async update(id: string, dto: UpdatePostCommonDto) {
    const existingPost = this.postRepository.findById(id);
    const updatedPostData = {
      ...existingPost,
      ...dto,
      publishedAt: new Date(),
    };
    // const TypeEntity = ContentEntityAdapter[dto.type];
    // const newPostEntity = new TypeEntity(updatedPostData);
    // return this.postRepository.update(id, newPostEntity);
  }

  public async repost(id: string, userId: string) {
    const originalPost = await this.postRepository.findRepost(id, userId);
    if (originalPost) {
      throw new BadRequestException(PostErrorMessage.AlreadyReposted);
    }
    const repostedPost = {
      ...originalPost,
      originId: originalPost.id,
      userId: userId,
      originUserId: originalPost.userId,
      isReposted: true,
      publishedAt: new Date(),
    };

    // const TypeEntity = ContentEntityAdapter[originalPost.type];
    // const newPostEntity = new TypeEntity(repostedPost);

    // return newPostEntity;
  }

  public async delete(id: string, userId: string) {
    const post = await this.postRepository.findById(id);
    if (post.userId !== userId) {
      throw new BadRequestException(PostErrorMessage.UnableDelete);
    }
    await this.postRepository.deleteById(id);
  }
}
