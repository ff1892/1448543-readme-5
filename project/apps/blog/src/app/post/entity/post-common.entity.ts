import { PostCommon, PostStatus, PostType } from '@project/types';

export class PostCommonEntity implements PostCommon {
  public id?: string;
  public originId?: string;
  public userId?: string;
  public originUserId?: string;
  public createdAt?: Date;
  public publishedAt?: Date;
  public status: PostStatus;
  public type: PostType;
  public isReposted: boolean;
  public tags: string[];

  constructor(data: PostCommon) {
    this.populate(data);
  }

  public populate(data: PostCommon) {
    this.id = data.id;
    this.originId = data.originId;
    this.userId = data.userId;
    this.originUserId = data.originUserId;
    this.createdAt = data.createdAt;
    this.publishedAt = data.publishedAt;
    this.status = data.status;
    this.type = data.type;
    this.isReposted = data.isReposted;
    this.tags = data.tags;
  }

  public toPOJO() {
    return {
      id: this.id,
      originId: this.originId,
      userId: this.userId,
      originUserId: this.originUserId,
      createdAt: this.createdAt,
      publishedAt: this.publishedAt,
      status: this.status,
      type: this.type,
      isReposted: this.isReposted,
      tags: this.tags,
    };
  }
}
