import { argv } from 'process';
import data from './2023-formatted-posts.json';
import { FormattedPost, Tag } from '../src/types/tag';

const posts = data as FormattedPost[];

const attribute = argv[2];
const value = argv[3];

if (!attribute || !value) {
  console.error('Please provide both attribute and value');
  process.exit(1);
}

const validAttributes: Array<keyof FormattedPost> = [
  'author',
  'readingTime',
  'tags',
  'claps',
  'words',
  'responses',
  'title',
  'url',
];

if (!validAttributes.includes(attribute as keyof FormattedPost)) {
  console.error('Invalid attribute');
  process.exit(1);
}

console.log(
  `Performing query with attribute: "${attribute}" and value: "${value}"`
);

let results: FormattedPost[];

if (attribute === 'tags') {
  results = posts.filter((post: FormattedPost) =>
    post.tags.some((tag: string) => tag === value)
  );
} else {
  results = posts.filter(
    (post: FormattedPost) => post[attribute as keyof FormattedPost] === value
  );
}

console.log(JSON.stringify(results));
console.log(`Found ${results.length} results`);
