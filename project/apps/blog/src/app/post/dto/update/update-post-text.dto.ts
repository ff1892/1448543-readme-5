import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostCommonDto } from './update-post-common.dto';

export class UpdatePostTextDto extends UpdatePostCommonDto {
  @ApiProperty({
    description: 'Post text',
    example: 'This is my first post on this platform',
  })
  public text: string;

  @ApiProperty({
    description: 'Post headline',
    example: 'Hello world',
  })
  public title: string;

  @ApiProperty({
    description: 'Post preview',
    example: "Let's begin",
  })
  public preview?: string;
}
