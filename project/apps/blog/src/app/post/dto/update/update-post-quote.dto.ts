import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostCommonDto } from './update-post-common.dto';

export class UpdatePostQuoteDto extends UpdatePostCommonDto {
  @ApiProperty({
    description: 'Quote text',
    example: "If you're going to do something, do it with style!",
  })
  public text: string;

  @ApiProperty({
    description: 'Quote author',
    example: 'Jason Statham',
  })
  public quoteAuthor: string;
}
