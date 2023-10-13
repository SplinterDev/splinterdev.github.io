export type TKLPost = {
  id: string;
  title: string;
  author: {
    name: string;
    id: string;
  };
  scheduledAt?: number;
};
