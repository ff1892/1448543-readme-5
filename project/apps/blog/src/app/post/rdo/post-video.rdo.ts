import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostVideoRdo {
  @ApiProperty({
    description: 'Post headline',
    example: 'Look at this',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://video.com/1',
  })
  @Expose()
  public link: string;
}
