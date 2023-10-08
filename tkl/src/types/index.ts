import { Collection } from './collection';
import { Post } from './post';
import { StreamItems } from './streamItems';
import { Tag } from './tag';
import { User } from './user';

export type MediumResponse = {
  success: boolean;
  payload: {
    collection: Collection;
    streamItems: StreamItems;
    paging: {
      path: string;
      next: {
        limit: number;
        from: string;
      };
    };
    filterBy: string;
    hasUnlisted: boolean;
    hasScheduled: boolean;
    references: {
      Collection: Record<string, Collection>;
      User: Record<string, User>;
      Post: Record<string, Post>;
    };
  };
  v: number;
  b: string;
};

//

//

//

//

//
//

//

//

//

//
//

//

//

//

//
//

//

//

//

//
