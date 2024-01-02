import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { PostContentRepository } from './repository/post-content.repository';
import { PostTextRepository } from './repository/post-text.repository';
import { PostVideoRepository } from './repository/post-video.repository';
import { PostQuoteRepository } from './repository/post-quote.repository';
import { PostPhotoRepository } from './repository/post-photo.repository';
import { PostLinkRepository } from './repository/post-link.repository';

@Module({
  controllers: [PostController],
  providers: [
    PostService,
    PostRepository,
    PostContentRepository,
    PostTextRepository,
    PostVideoRepository,
    PostQuoteRepository,
    PostPhotoRepository,
    PostLinkRepository,
  ],
  exports: [PostRepository, PostContentRepository],
})
export class PostModule {}
