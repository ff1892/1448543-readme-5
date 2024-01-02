import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostCommonDto } from './update-post-common.dto';

export class UpdatePostVideoDto extends UpdatePostCommonDto {
  @ApiProperty({
    description: 'Post headline',
    example: 'Look at this',
  })
  public headline: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://video.com/1',
  })
  public title: string;
}
