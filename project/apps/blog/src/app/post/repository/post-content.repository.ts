import {
  PostContentEntity,
  PostLinkEntity,
  PostPhotoEntity,
  PostTextEntity,
  PostVideoEntity,
  PostQuoteEntity,
  PostCommonEntity,
} from '../entity';
import { PostTextRepository } from './post-text.repository';
import { PostVideoRepository } from './post-video.repository';
import { PostPhotoRepository } from './post-photo.repository';
import { PostLinkRepository } from './post-link.repository';
import { PostQuoteRepository } from './post-quote.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostContentRepository {
  constructor(
    private readonly postTextRepository: PostTextRepository,
    private readonly postVideoRepository: PostVideoRepository,
    private readonly postPhotoRepository: PostPhotoRepository,
    private readonly postLinkRepository: PostLinkRepository,
    private readonly postQuoteRepository: PostQuoteRepository
  ) {}

  getRepository(entity: PostContentEntity) {
    if (entity instanceof PostTextEntity) {
      return this.postTextRepository;
    }
    if (entity instanceof PostVideoEntity) {
      return this.postVideoRepository;
    }
    if (entity instanceof PostPhotoEntity) {
      return this.postPhotoRepository;
    }
    if (entity instanceof PostLinkEntity) {
      return this.postLinkRepository;
    }
    if (entity instanceof PostQuoteEntity) {
      return this.postQuoteRepository;
    }
  }

  async save(entity: PostContentEntity) {
    if (entity instanceof PostTextEntity) {
      return this.postTextRepository.save(entity);
    }
    if (entity instanceof PostVideoEntity) {
      return this.postVideoRepository.save(entity);
    }
    if (entity instanceof PostPhotoEntity) {
      return this.postPhotoRepository.save(entity);
    }
    if (entity instanceof PostLinkEntity) {
      return this.postLinkRepository.save(entity);
    }
    if (entity instanceof PostQuoteEntity) {
      return this.postQuoteRepository.save(entity);
    }
  }
}
