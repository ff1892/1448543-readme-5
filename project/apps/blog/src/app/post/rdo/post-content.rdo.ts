import { PostTextRdo } from './post-text.rdo';
import { PostVideoRdo } from './post-video.rdo';
import { PostPhotoRdo } from './post-photo.rdo';
import { PostQuoteRdo } from './post-quote.rdo';
import { PostLinkRdo } from './post-link.rdo';
import {
  PostContentEntity,
  PostLinkEntity,
  PostPhotoEntity,
  PostQuoteEntity,
  PostTextEntity,
  PostVideoEntity,
} from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PostContentRdo {
  @ApiProperty({
    description: 'Link URL',
    example: 'https://github.com',
  })
  @Expose()
  public link: string;

  @ApiProperty({
    description: 'Link description',
    example: 'Greatest website ever',
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Post photo',
    example: '/pictures/picture-1.png',
  })
  @Expose()
  public photo: string;

  @ApiProperty({
    description: 'Quote text',
    example: "If you're going to do something, do it with style!",
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'Quote author',
    example: 'Jason Statham',
  })
  @Expose()
  public quoteAuthor: string;

  @ApiProperty({
    description: 'Post headline',
    example: 'Hello world',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Post preview',
    example: "Let's begin",
  })
  @Expose()
  public preview: string;
}

// export class PostContentRdo {
//   entity: PostContentEntity;

//   constructor(entity: PostContentEntity) {
//     this.entity = entity;
//   }

//   getRdo() {
//     if (this.entity instanceof PostTextEntity) {
//       return PostTextRdo;
//     }
//     if (this.entity instanceof PostVideoEntity) {
//       return PostVideoRdo;
//     }
//     if (this.entity instanceof PostPhotoEntity) {
//       return PostPhotoRdo;
//     }
//     if (this.entity instanceof PostLinkEntity) {
//       return PostLinkRdo;
//     }
//     if (this.entity instanceof PostQuoteEntity) {
//       return PostQuoteRdo;
//     }
//   }
// }
