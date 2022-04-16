import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TopNav } from '../src/components';
import styles from '../styles/app.module.scss';
import '../styles/globals.css';

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
