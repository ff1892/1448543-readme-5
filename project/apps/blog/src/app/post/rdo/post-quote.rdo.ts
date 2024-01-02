import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PostQuoteRdo {
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
}
