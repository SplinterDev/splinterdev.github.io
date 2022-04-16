import Link from 'next/link';
import React from 'react';
import styles from './TopNav.module.scss';

export const TopNav = () => {
  return (
    <div className={styles.topnav}>
      <div>
        <Link href="/">FJCMontenegro</Link>
      </div>
      <div className={styles.links}>
        <Link href="/developer">🧑‍💻</Link>
        <Link href="/writer">✍️</Link>
        <Link href="/drummer">🥁</Link>
      </div>
    </div>
  );
};
