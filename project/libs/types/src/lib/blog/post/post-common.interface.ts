import { PostStatus } from './post-status.enum';
import { PostType } from './post-type.enum';

export interface PostCommon {
  id?: string;
  originId?: string;
  userId?: string;
  originUserId?: string;
  contentId?: string;
  status: PostStatus;
  type: PostType;
  isReposted: boolean;
  tags?: string[];
  createdAt?: Date;
  publishedAt?: Date;
}
