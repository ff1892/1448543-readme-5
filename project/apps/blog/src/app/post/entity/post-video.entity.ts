import { PostVideo } from '@project/types';

export class PostVideoEntity implements PostVideo {
  public title: string;
  public link: string;

  constructor(data: PostVideo) {
    this.populate(data);
  }

  public toPOJO() {
    return {
      title: this.title,
      link: this.link,
    };
  }

  public populate(data: PostVideo) {
    this.title = data.title;
    this.link = data.link;
  }
}
