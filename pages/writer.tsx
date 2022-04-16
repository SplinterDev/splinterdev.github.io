import React from 'react';
import { AnimatedPresence } from '../src/components';

type Props = {};

const Writer = (props: Props) => {
  return (
    <AnimatedPresence>
      <h1>A Writer</h1>
      <p>
        Although I&apos;m Brazilian, I enjoy reading and writing fiction in
        English. You can check my stories on{' '}
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
        #68 (I will talk about this at every opportunity I get).
      </p>
      <p>
        If you want to discuss what is the most compelling end-of-world
        scenario, you can add me on Discord (SplinterFM#6322) and we can throw
        some theories around. Also, if you&apos;re inclined, I can read your
        fiction for free and give you my humble opinion (be aware: I&apos;m a
        slow reader).
      </p>
    </AnimatedPresence>
  );
};

export default Writer;
