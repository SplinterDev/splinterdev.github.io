import React from 'react';
import { AnimatedPresence } from '../src/components';

type Props = {};

const Writer = (props: Props) => {
  return (
    <AnimatedPresence>
      <h1>A Writer</h1>
      <p>
        Although I&apos;m Brazilian, I read and write fiction in English. I post
        most of my stories on{' '}
        <a
          href="https://blog.reedsy.com/creative-writing-prompts/author/splinter-magus/"
          target="_blank"
          rel="noreferrer"
        >
          Reedsy Prompts
        </a>
        , where my short story,{' '}
        <a
          href="https://blog.reedsy.com/creative-writing-prompts/contests/68/submissions/43670/"
          target="_blank"
          rel="noreferrer"
        >
          Silence
        </a>
        , was picked among over a thousand submissions as the winner for contest
        #68.
      </p>
      <p>
        <a
          href="https://fjcmontenegro.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>{' '}
        is my platform of choice to post blog-like entries, but I also try to
        add the stories I write for Reedsy there. I can&apos;t promise
        consistency, but one of my goals as I work in my character growth is
        posting more there.
      </p>
      <p>
        I also have a{' '}
        <a
          href="https://twitter.com/fjcmontenegro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        account, but let&apos;s be honest: it&apos;s 2022, who uses Twitter?
        It&apos;s not like it&apos;s one of the largest social media websites in
        the world and a virtual gathering place for humanity to sahre news,
        stories, and culture in the twenty-first century.
      </p>
    </AnimatedPresence>
  );
};

export default Writer;
