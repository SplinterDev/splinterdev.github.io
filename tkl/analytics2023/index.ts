import { Post } from '../src/types/post';
import { User } from '../src/types/user';
import postsData from './2023-published-posts.json';
import usersData from './2023-published-authors.json';
import { byCount, byLabel, writeDataAsCSV, writeDataToFile } from './helpers';
import { DataPoint } from './types';

const posts = postsData as Post[];
const users = usersData as User[];

const tags: DataPoint[] = [];
const authors: DataPoint[] = [];
const readingTimes: DataPoint[] = [];
const claps: DataPoint[] = [];
const words: DataPoint[] = [];

const getUserName = (id: string) => {
  const user = users.find((user) => user.userId === id);
  return user ? user.name : 'Unknown';
};

const count = (label: string, dataPoints: DataPoint[]) => {
  const index = dataPoints.findIndex((d) => d.label === label);
  if (index !== -1) {
    dataPoints[index].count += 1;
    // dataPoints[index].percentage = Math.round(
    //   (dataPoints[index].count / posts.length) * 100
    // );
  } else {
    dataPoints.push({
      label,
      count: 1,
      //  percentage: 0
    });
  }
};

posts.forEach((post, i) => {
  // count authors
  count(getUserName(post.creatorId), authors);

  // count readingTime
  count(`${Math.ceil(post.virtuals.readingTime)}`, readingTimes);

  // count tags
  post.virtuals.tags.forEach((tag) => {
    count(tag.slug, tags);
  });

  // count claps
  // round to the closest 100
  count(
    `${post.virtuals.totalClapCount - (post.virtuals.totalClapCount % 100)}`,
    claps
  );

  // count words
  // round to the closest 100
  count(`${post.virtuals.wordCount - (post.virtuals.wordCount % 100)}`, words);
});

const sortedTags = tags.sort(byCount);
const sortedAuthors = authors.sort(byCount);
const sortedReadingTimes = readingTimes.sort(byLabel);
const sortedClaps = claps.sort(byLabel);
const sortedWords = words.sort(byLabel);

writeDataAsCSV(sortedTags, 'analytics/tags2023', 'Tag');
writeDataAsCSV(sortedAuthors, 'analytics/authors2023', 'Author');
writeDataAsCSV(
  sortedReadingTimes,
  'analytics/readingTimes2023',
  'Reading Time'
);
writeDataAsCSV(sortedClaps, 'analytics/claps2023', 'Claps');
writeDataAsCSV(sortedWords, 'analytics/words2023', 'Words');

const avgReadingTime: DataPoint = {
  label: 'Average Reading Time (min)',
  count: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.readingTime, 0) /
      posts.length
  ),
};
const avgClaps: DataPoint = {
  label: 'Average Claps',
  count: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.totalClapCount, 0) /
      posts.length
  ),
};

const avgWords: DataPoint = {
  label: 'Average Words',
  count: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.wordCount, 0) / posts.length
  ),
};

writeDataAsCSV(
  [avgReadingTime, avgClaps, avgWords],
  'analytics/averages2023',
  'Item'
);

writeDataToFile(
  {
    tags: sortedTags,
    authors: sortedAuthors,
    readingTimes: sortedReadingTimes,
    claps: sortedClaps,
    words: sortedWords,
    avgReadingTime,
    avgClaps,
    avgWords,
  },
  'analytics/all2023'
);
