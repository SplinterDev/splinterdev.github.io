import axios from 'axios';
import { MediumResponse } from '../src/types';
import { Post } from '../src/types/post';
import { writeDataToFile } from './helpers';
import { User } from '../src/types/user';

export async function fetchPosts(
  next?: MediumResponse['payload']['paging']['next']
): Promise<MediumResponse> {
  let url = `https://medium.com/the-kraken-lore/stories/published`;
  if (next?.to) {
    url = `https://medium.com/the-kraken-lore/stories/published/loadMore?limit=50&to=${next.to}`;
  }

  const headers = {
    Accept: 'application/json',
    Cookie:
      'g_state={"i_p":1696797210416,"i_l":1}; nonce=jYI70iUy; uid=57907cd5c2e4; sid=1:gjoGmrhSyGGZjfT03udEMQTQGmUrvxdztWalatODBjmiIO8mFmkA5SxCNoiJgWJT; __cfruid=7963387cc7001e68d68eaf199c0253796d9ba674-1699553033; xsrf=dce90fff11b2; _gid=GA1.2.2134263446.1701989177; lightstep_guid/medium-web=663a27420e3c9fa2; lightstep_session_id=8e540dccf80488ef; pr=1; tz=480; _ga_7JY7T788PK=GS1.1.1701991331.11.1.1701991476.0.0.0; _ga=GA1.2.962660337.1627134316; sz=1920; _gat=1',
  };

  try {
    const response = await axios.get(url, { headers });
    const cleanedText = response.data.replace('])}while(1);</x>', ''); // Remove the prefix
    const data = JSON.parse(cleanedText); // Parse the cleaned text into a JSON object
    return data; // Return the fetched data
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export const formatDataRaw = (
  response: MediumResponse
): { posts: Post[]; users: User[] } => {
  const posts: Post[] = [];
  const users: User[] = [];

  Object.values(response.payload.references.Post).forEach((post: Post) => {
    posts.push(post);
  });
  Object.values(response.payload.references.User).forEach((user: User) => {
    users.push(user);
  });

  return { posts, users };
};

const fetch2023PublishedPosts = async () => {
  try {
    let data = await fetchPosts();
    let page = 0;
    let rawData = formatDataRaw(data);
    const posts: Post[] = [...rawData.posts];
    const users: User[] = [...rawData.users];

    while (data.payload.paging.next) {
      console.log('Page:', ++page, 'Posts:', posts.length);

      data = await fetchPosts(data.payload.paging.next);
      if (!data.payload.references.Post) {
        break;
      }

      rawData = formatDataRaw(data);
      const formattedPosts = rawData.posts.filter(
        (post) => new Date(post.firstPublishedAt).getFullYear() === 2023
      );
      const formattedUsers = rawData.users.filter((user) =>
        formattedPosts.find((post) => post.creatorId === user.userId)
      );

      if (formattedPosts.length === 0) {
        break;
      }

      posts.push(...formattedPosts);
      users.push(...formattedUsers);
    }

    writeDataToFile(posts, '2023-published-posts');
    writeDataToFile(users, '2023-published-authors');
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await fetch2023PublishedPosts();
})();
