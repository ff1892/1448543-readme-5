import { PostLink } from '@project/types';

export class PostLinkEntity implements PostLink {
  public link: string;
  public description?: string;

  constructor(data: PostLink) {
    this.populate(data);
  }

  public toPOJO() {
    return {
      description: this.description,
      link: this.link,
    };
  }

  public populate(data: PostLink) {
    this.description = data.description;
    this.link = data.link;
  }
}
