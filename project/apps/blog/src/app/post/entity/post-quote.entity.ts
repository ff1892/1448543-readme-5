import { PostQuote } from '@project/types';

export class PostQuoteEntity implements PostQuote {
  public text: string;
  public quoteAuthor: string;

  constructor(data: PostQuote) {
    this.populate(data);
  }

  public toPOJO() {
    return {
      text: this.text,
      quoteAuthor: this.quoteAuthor,
    };
  }

  public populate(data: PostQuote) {
    this.text = data.text;
    this.quoteAuthor = data.quoteAuthor;
  }
}
