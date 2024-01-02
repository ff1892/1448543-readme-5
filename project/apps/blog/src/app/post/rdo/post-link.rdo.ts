import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostLinkRdo {
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
}
