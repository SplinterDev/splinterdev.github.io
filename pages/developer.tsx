import React from 'react';
import { AnimatedPresence } from '../src/components';

const Developer = () => {
  return (
    <AnimatedPresence>
      <h1>A Developer</h1>
      <p>
        I&apos;m a Front-End Engineer with a Master&apos;s Degree in Computer
        Science and more than 10 years of experience in Web Development. During
        these 10 years, I&apos;ve been a Full Stack developer and worked with so
        many different technologies I lost count. For the last few years, React
        is my jam.
      </p>
      <p>
        During my time in the university, I studied Neural Networks, Simulation,
        and Robotics. I participated in a robotics competition in China in 2015
        and spent 4 months in Germany in 2016, colaborating with people from all
        over the world. During the last few of years I&apos;ve also colaborated
        with international teams, working remotely with coleagues from Brazil,
        US, Ireland, India, Germany, France, Canada and South Africa.
      </p>
      <p>
        You can peek at my projects on{' '}
        <a
          href="https://github.com/SplinterDev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{' '}
        and get in touch through{' '}
        <a
          href="https://www.linkedin.com/in/fabricio-jc-montenegro/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </AnimatedPresence>
  );
};

export default Developer;
