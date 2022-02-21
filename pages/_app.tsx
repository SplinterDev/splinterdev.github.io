import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/App.scss';
import { Sidenav } from '../src/components';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <Head>
        <title>Fabricio Julian C. Montenegro</title>
        <meta
          name="description"
          content="Developer, writer, drummer, and all-around cool guy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Link href="/">
          <a>
            <h1>Fabricio Julian C. Montenegro</h1>
          </a>
        </Link>
      </header>
      <div className="content">
        <aside>
          <Sidenav />
        </aside>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <footer>Copyright &copy; 2021 Fabricio Julian C. Montenegro</footer>
    </div>
  );
}

export default MyApp;
