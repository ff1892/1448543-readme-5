import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostCommonDto {
  @ApiProperty({
    description: 'Post status',
    example: 'published',
  })
  public status: string;

  @ApiProperty({
    description: 'Post tags',
    example: ['cooking'],
  })
  public tags: string;
}
