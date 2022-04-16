import React from 'react';
import { AnimatedPresence } from '../src/components';

const Developer = () => {
  return (
    <AnimatedPresence>
      <h1>A Developer</h1>
      <p>
        I&apos;m a Front-End Engineer with a Master&apos;s Degree in Computer
        Science and more than 10 years of experience in Web Development. During
        these 10 years, I&apos;ve been a Full Stack developer, working with many
        different technologies, and a couple of years ago I decided to focus on
        Front-End Development, so I have professional experience with Angular,
        React, and React Native.
      </p>
      <p>
        During my time in the university, I studied Neural Networks, Simulation,
        and Robotics. I participated in a robotics competition in China in 2015
        and spent 4 months in Germany in 2016, colaborating with people from all
        over the world. During the last couple of years I&apos;ve also
        colaborated with international teams, working remotely with coleagues
        from Brazil, US, Ireland, and India.
      </p>
      <p>
        You can peek at my projects (like{' '}
        <a
          href="https://splinterdev.github.io/tobedone/"
          rel="noreferrer"
          target="_blank"
        >
          To Be Done
        </a>
        ) on{' '}
        <a
          href="https://github.com/SplinterDev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{' '}
        and get in touch with me on{' '}
        <a
          href="https://www.linkedin.com/in/fabricio-jc-montenegro/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <p>
        My CV is available for download{' '}
        <a href="fjcm_cv.pdf" download="FabricioJCMontenegro-CV.pdf">
          here
        </a>
        .
      </p>
    </AnimatedPresence>
  );
};

export default Developer;
