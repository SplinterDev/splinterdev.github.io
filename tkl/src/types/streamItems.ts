type CollectionManagerPost = {
  postId: string;
  scheduledAt: number;
};

type StreamItem = {
  createdAt: number;
  randomId: string;
  collectionManagerPost: CollectionManagerPost;
  itemType: string;
  type: string;
};

export type StreamItems = StreamItem[];
