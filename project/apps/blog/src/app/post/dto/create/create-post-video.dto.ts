import { ApiProperty } from '@nestjs/swagger';
import { CreatePostCommonDto } from './create-post-common.dto';

export class CreatePostVideoDto extends CreatePostCommonDto {
  @ApiProperty({
    description: 'Post headline',
    example: 'Look at this',
  })
  public title: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://video.com/1',
  })
  public link: string;
}
