import { ApiProperty } from '@nestjs/swagger';
import { CreatePostCommonDto } from './create-post-common.dto';

export class CreatePostQuoteDto extends CreatePostCommonDto {
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
