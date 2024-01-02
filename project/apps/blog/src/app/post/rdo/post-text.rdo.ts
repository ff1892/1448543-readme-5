import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostTextRdo {
  @ApiProperty({
    description: 'Post text',
    example: 'This is my first post on this platform',
  })
  @Expose()
  public text: string;

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
