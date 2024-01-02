import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostPhotoRdo {
  @ApiProperty({
    description: 'Post photo',
    example: '/pictures/picture-1.png',
  })
  @Expose()
  public photo: string;
}
