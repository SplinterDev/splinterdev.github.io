import React from 'react';
import { AnimatedPresence } from '../src/components';

type Props = {};

const Drummer = (props: Props) => {
  return (
    <AnimatedPresence>
      <h1>A Drummer</h1>
      <p>
        From 2010 to 2020, I was the drummer of the Brazilian gothic-death metal
        band{' '}
        <a
          href="https://www.instagram.com/finita.metal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Finita
        </a>
        . In late 2019, I moved from Santa Maria, where the band is based, so we
        had to part ways. I still take part in some recordings and you might see
        me in a picture or a video from time to time.
      </p>
      <p>
        You can find them on{' '}
        <a
          href="https://open.spotify.com/artist/2wbIsjB3vYzkOCwqbLReTg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        . Though I&apos;m not in the band anymore, they&apos;re very much still
        active, and their new drummer is so metal!
      </p>
      <p>
        In early 2021, Finita released videos from 2020 Metal Sul Festival on
        their YouTube Channel, including{' '}
        <a
          href="https://www.youtube.com/watch?v=NI4gcTRRav8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Valley of Shadows
        </a>
        . Check it out (I&apos;m rocking a mustache)!
      </p>
    </AnimatedPresence>
  );
};

export default Drummer;
