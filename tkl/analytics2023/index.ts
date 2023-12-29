import { Post } from '../src/types/post';
import { User } from '../src/types/user';
import postsData from './2023-published-posts.json';
import usersData from './2023-published-authors.json';
import {
  byValue,
  byProperty,
  writeDataAsCSV,
  writeDataToFile,
} from './helpers';
import { DataPoint } from './types';

const posts = postsData as Post[];
const users = usersData as User[];

const tags: DataPoint[] = [];
const authors: DataPoint[] = [];
const readingTimes: DataPoint[] = [];
const claps: DataPoint[] = [];
const words: DataPoint[] = [];
const responses: DataPoint[] = [];

const clapsPerMinute: DataPoint[] = [];
const responsePerMinute: DataPoint[] = [];
const avgClapsPerUser: DataPoint[] = [];
const avgResponsesPerUser: DataPoint[] = [];
const totalClapsPerUser: DataPoint[] = [];
const totalResponsesPerUser: DataPoint[] = [];
const totalMinutesPerUser: DataPoint[] = [];
const totalWordsPerUser: DataPoint[] = [];
const avgClapsPerTag: DataPoint[] = [];
const avgResponsesPerTag: DataPoint[] = [];

const getUserName = (id: string) => {
  const user = users.find((user) => user.userId === id);
  return user ? user.name : 'Unknown';
};

const getUserHandle = (id: string) => {
  const user = users.find((user) => user.userId === id);
  return user ? user.username : 'Unknown';
};

const formatPost = (post: Post) => {
  return {
    author: getUserName(post.creatorId),
    readingTime: Math.ceil(post.virtuals.readingTime),
    tags: post.virtuals.tags,
    claps: post.virtuals.totalClapCount,
    words: post.virtuals.wordCount,
    responses: post.virtuals.responsesCreatedCount,
    title: post.title,
    url: post.canonicalUrl,
  };
};

const count = (property: string | number, dataPoints: DataPoint[]) => {
  const index = dataPoints.findIndex((d) => d.property === property);
  if (index !== -1) {
    dataPoints[index].value += 1;
    // dataPoints[index].percentage = Math.round(
    //   (dataPoints[index].value / posts.length) * 100
    // );
  } else {
    dataPoints.push({
      property,
      value: 1,
      //  percentage: 0
    });
  }
};

const sum = (
  property: string | number,
  value: number,
  dataPoints: DataPoint[]
) => {
  const index = dataPoints.findIndex((d) => d.property === property);
  if (index !== -1) {
    dataPoints[index].value += value;
    dataPoints[index].count! += 1;
  } else {
    dataPoints.push({
      property,
      value,
      count: 1,
    });
  }
};

const roundToClosest100 = (value: number) => value - (value % 100);

//////////////////////////
// Counting
//////////////////////////
posts.forEach((post, i) => {
  const thisPost = {
    author: getUserName(post.creatorId),
    readingTime: Math.ceil(post.virtuals.readingTime),
    tags: post.virtuals.tags,
    claps: post.virtuals.totalClapCount,
    words: post.virtuals.wordCount,
    responses: post.virtuals.responsesCreatedCount,
    title: post.title,
    url: post.canonicalUrl,
  };

  // count authors
  count(thisPost.author, authors);

  // count readingTime
  count(thisPost.readingTime, readingTimes);

  // count tags
  thisPost.tags.forEach((tag) => {
    count(tag.slug, tags);
  });

  // count claps
  count(`${roundToClosest100(thisPost.claps)}`, claps);

  // count words
  count(`${roundToClosest100(thisPost.words)}`, words);

  // count responses
  count(`${thisPost.responses}`, responses);

  // count claps per minute
  sum(`${thisPost.readingTime}`, thisPost.claps, clapsPerMinute);

  // count responses per minute
  sum(`${thisPost.readingTime}`, thisPost.responses, responsePerMinute);

  // count claps per user
  sum(thisPost.author, thisPost.claps, avgClapsPerUser);

  // count responses per user
  sum(thisPost.author, thisPost.responses, avgResponsesPerUser);

  // count total claps per user
  sum(thisPost.author, thisPost.claps, totalClapsPerUser);

  // count total responses per user
  sum(thisPost.author, thisPost.responses, totalResponsesPerUser);

  // count total minutes per user
  sum(thisPost.author, thisPost.readingTime, totalMinutesPerUser);

  // count total words per user
  sum(thisPost.author, thisPost.words, totalWordsPerUser);

  // count average claps per tag
  thisPost.tags.forEach((tag) => {
    sum(tag.slug, thisPost.claps, avgClapsPerTag);
  });

  // count average responses per tag
  thisPost.tags.forEach((tag) => {
    sum(tag.slug, thisPost.responses, avgResponsesPerTag);
  });
});

//////////////////////////
// Histograms
//////////////////////////
// calculates average for each total of claps per story length
clapsPerMinute.map((d) => {
  d.value = Math.round(d.value / d.count!);
  d.property = `${d.property}`;
});

// calculates average for each total of responses per story length
responsePerMinute.map((d) => {
  d.value = Math.round(d.value / d.count!);
  d.property = `${d.property}`;
});

// calculates average for each total of claps per user
avgClapsPerUser.map((d) => {
  d.value = Math.round(d.value / d.count!);
  d.property = `${d.property}`;
});

// calculates average for each total of responses per user
avgResponsesPerUser.map((d) => {
  d.value = Math.round(d.value / d.count!);
  d.property = `${d.property}`;
});

// calculates average for each total of claps per user
totalClapsPerUser.map((d) => {
  d.property = `${d.property}`;
});

// calculates average for each total of responses per user
totalResponsesPerUser.map((d) => {
  d.property = `${d.property}`;
});

// calculates average for each claps per tag
avgClapsPerTag.map((d) => {
  d.value = Math.round(d.value / d.count!);
});

// calculates average for each responses per tag
avgResponsesPerTag.map((d) => {
  d.value = Math.round(d.value / d.count!);
});

//////////////////////////
// Sorting
//////////////////////////
// tags ordenados por claps
// tags ordenados por responses
// tags ordenados por reading time

const sortedTags = tags.sort(byValue);
const sortedAuthors = authors.sort(byValue);
const sortedReadingTimes = readingTimes.sort(byProperty);
const sortedClaps = claps.sort(byProperty);
const sortedWords = words.sort(byProperty);
const sortedResponses = responses.sort(byProperty);
const sortedClapsPerMinute = clapsPerMinute.sort(byValue);
const sortedResponsePerMinute = responsePerMinute.sort(byValue);
const sortedClapsPerUser = avgClapsPerUser.sort(byValue);
const sortedResponsesPerUser = avgResponsesPerUser.sort(byValue);
const sortedTotalClapsPerUser = totalClapsPerUser.sort(byValue);
const sortedTotalResponsesPerUser = totalResponsesPerUser.sort(byValue);
const sortedTotalMinutesPerUser = totalMinutesPerUser.sort(byValue);
const sortedTotalWordsPerUser = totalWordsPerUser.sort(byValue);
const sortedAvgClapsPerTag = avgClapsPerTag.sort(byValue);
const sortedAvgResponsesPerTag = avgResponsesPerTag.sort(byValue);

//////////////////////////
// Averages
//////////////////////////

const avgReadingTime: DataPoint = {
  property: 'Average Reading Time (min)',
  value: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.readingTime, 0) /
      posts.length
  ),
};
const avgClaps: DataPoint = {
  property: 'Average Claps',
  value: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.totalClapCount, 0) /
      posts.length
  ),
};

const avgWords: DataPoint = {
  property: 'Average Words',
  value: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.wordCount, 0) / posts.length
  ),
};

const avgResponses: DataPoint = {
  property: 'Average Responses',
  value: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.responsesCreatedCount, 0) /
      posts.length
  ),
};

const avgStoryPerAuthor: DataPoint = {
  property: 'Average Story Per Author',
  value: Math.round(posts.length / authors.length),
};

const avgClapsPerStory: DataPoint = {
  property: 'Average Claps Per Story',
  value: Math.round(
    posts.reduce((acc, post) => acc + post.virtuals.totalClapCount, 0) /
      posts.length
  ),
};

//////////////////////////
// Writing
//////////////////////////

writeDataAsCSV(sortedTags, 'analytics/tags2023', 'Tag');
writeDataAsCSV(sortedAuthors, 'analytics/authors2023', 'Author');
writeDataAsCSV(
  sortedReadingTimes,
  'analytics/readingTimes2023',
  'Reading Time'
);
writeDataAsCSV(sortedClaps, 'analytics/claps2023', 'Claps');
writeDataAsCSV(sortedWords, 'analytics/words2023', 'Words');
writeDataAsCSV(
  sortedResponses,
  'analytics/responses2023',
  'Responses',
  'Stories w/ this # of responses'
);
writeDataAsCSV(
  sortedClapsPerMinute,
  'analytics/clapsPerMinute2023',
  'Story Length (min)',
  'Average Claps'
);
writeDataAsCSV(
  sortedResponsePerMinute,
  'analytics/responsesPerMinute2023',
  'Story Length (min)',
  'Average Responses'
);
writeDataAsCSV(
  sortedClapsPerUser,
  'analytics/clapsPerUser2023',
  'Author',
  'Avg Claps'
);
writeDataAsCSV(
  sortedResponsesPerUser,
  'analytics/responsesPerUser2023',
  'Author',
  'Avg # of Responses'
);
writeDataAsCSV(
  sortedTotalClapsPerUser,
  'analytics/totalClapsPerUser2023',
  'Author',
  'Total Claps'
);
writeDataAsCSV(
  sortedTotalResponsesPerUser,
  'analytics/totalResponsesPerUser2023',
  'Author',
  'Total Responses'
);
writeDataAsCSV(
  sortedTotalMinutesPerUser,
  'analytics/totalMinutesPerUser2023',
  'Author',
  'Total Minutes'
);
writeDataAsCSV(
  sortedTotalWordsPerUser,
  'analytics/totalWordsPerUser2023',
  'Author',
  'Total Words'
);
writeDataAsCSV(
  sortedAvgClapsPerTag,
  'analytics/avgClapsPerTag2023',
  'Tag',
  'Avg Claps'
);
writeDataAsCSV(
  sortedAvgResponsesPerTag,
  'analytics/avgResponsesPerTag2023',
  'Tag',
  'Avg Responses'
);

writeDataAsCSV(
  [
    avgReadingTime,
    avgClaps,
    avgWords,
    avgResponses,
    avgStoryPerAuthor,
    avgClapsPerStory,
  ],
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
    responses: sortedResponses,
    avgReadingTime,
    avgClaps,
    avgWords,
    avgResponses,
    avgStoryPerAuthor,
    avgClapsPerStory,
  },
  'analytics/all2023'
);
