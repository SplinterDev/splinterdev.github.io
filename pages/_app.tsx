import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { TopNav } from '../src/components';
import styles from '../styles/app.module.scss';
import '../styles/globals.css';
import Script from 'next/script';

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-165360075-1"
      />
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-165360075-1');`}
      </Script>
      <header>{showNav && <TopNav />}</header>
      <main>
        <Component />
      </main>
    </div>
  );
}

export default MyApp;
