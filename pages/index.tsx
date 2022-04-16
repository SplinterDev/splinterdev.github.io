import type { NextPage } from 'next';
import Link from 'next/link';
import style from '../styles/home.module.scss';

type LinkKey = 'dev' | 'wri' | 'dru';
type TLink = { key: LinkKey; title: string; content: string; href: string };

const Home: NextPage = () => {
  const links: TLink[] = [
    { key: 'dev', title: 'a developer', content: '🧑‍💻', href: '/developer' },
    { key: 'wri', title: 'a writer', content: '✍️', href: '/writer' },
    { key: 'dru', title: 'a drummer', content: '🥁', href: '/drummer' },
  ];

  return (
    <div className={style.home}>
      <h1>FJCMontenegro is</h1>
      <div className={style.links}>
        {links.map((link) => (
          <div key={link.key} className={style.link}>
            <Link href={link.href}>{link.content}</Link>
            <div>
              <Link href={link.href}>{link.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
