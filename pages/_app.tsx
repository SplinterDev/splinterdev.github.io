import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ReactGA from 'react-ga';

import { TopNav } from '../src/components';
import styles from '../styles/app.module.scss';
import '../styles/globals.css';

const TRACKING_CODE = 'UA-165360075-1';

ReactGA.initialize(TRACKING_CODE);

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    route === '/' ? setShowNav(false) : setShowNav(true);
  }, [route]);

  return (
    <div className={styles.app}>
      <Head>
        <meta
          name="description"
          content="Developer, writer, drummer, and all-around cool guy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FJCMontenegro</title>
      </Head>
      <header>{showNav && <TopNav />}</header>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default MyApp;
