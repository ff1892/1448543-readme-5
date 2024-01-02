import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { PostService } from './post.service';
import {
  CreatePostCommonDto,
  CreatePostTextDto,
  CreatePostVideoDto,
  CreatePostPhotoDto,
  CreatePostQuoteDto,
  CreatePostLinkDto,
  CreatePostContentDto,
  CreatePostDto,
} from './dto/create';
import {
  UpdatePostCommonDto,
  UpdatePostTextDto,
  UpdatePostVideoDto,
  UpdatePostPhotoDto,
  UpdatePostQuoteDto,
  UpdatePostLinkDto,
} from './dto/update';
import { getPostRdo } from './utils/rdo-adapter';
import { ApiTags, ApiExtraModels, ApiResponse } from '@nestjs/swagger';
import { PostRdo } from './rdo';
import { POST_API_NAME, PostPath } from './post.constant';

@ApiTags(POST_API_NAME)
@ApiExtraModels(
  CreatePostTextDto,
  CreatePostVideoDto,
  CreatePostPhotoDto,
  CreatePostQuoteDto,
  CreatePostLinkDto,
  UpdatePostTextDto,
  UpdatePostVideoDto,
  UpdatePostPhotoDto,
  UpdatePostQuoteDto,
  UpdatePostLinkDto
)
@Controller(POST_API_NAME)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.CREATED,
    description: 'Post created',
  })
  @Post(PostPath.Create)
  public async create(@Body() dto: CreatePostDto) {
    const newPost = await this.postService.create(dto);
    return newPost;
  }

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.OK,
    description: 'Post updated',
  })
  @Patch(PostPath.Id)
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdatePostCommonDto
  ) {
    const post = await this.postService.update(id, dto);
    // return post;
  }

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.CREATED,
    description: 'Post reposted',
  })
  @Post(PostPath.Id)
  public async repost(@Body() userId: string, @Param('id') id: string) {
    const post = await this.postService.repost(id, userId);
    // return getPostRdo(post);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post deleted',
  })
  @Delete(PostPath.Id)
  public async delete(@Body() userId: string, @Param('id') id: string) {
    await this.postService.delete(id, userId);
  }
}
