import { MediumResponse } from '../types';
import { Post } from '../types/post';
import { TKLPost } from '../types/tkl';
import { User } from '../types/user';

export const formatData = (response: MediumResponse): TKLPost[] => {
  const posts: TKLPost[] = [];

  Object.values(response.payload.references.Post).forEach((post: Post) => {
    posts.push({
      id: post.id,
      title: post.title,
      author: {
        name: getAuthorById(post.creatorId, response).name,
        id: post.creatorId,
      },
      scheduledAt: getScheduleDate(post.id, response),
    });
  });

  return posts;
};

const getPostById = (id: string, response: MediumResponse): Post => {
  return response.payload.references.Post[id];
};
const getAuthorById = (id: string, response: MediumResponse): User => {
  return response.payload.references.User[id];
};
const getScheduleDate = (
  id: string,
  response: MediumResponse
): number | undefined => {
  const post = response.payload.streamItems.find((item) => {
    return item.collectionManagerPost.postId === id;
  });

  if (post) {
    return post.collectionManagerPost.scheduledAt;
  }
};
