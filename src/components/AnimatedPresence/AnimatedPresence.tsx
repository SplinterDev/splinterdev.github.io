import React from 'react';
import { Footer } from '../';
import styles from './AnimatedPresence.module.scss';

type Props = {
  children: React.ReactNode;
};

export const AnimatedPresence = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <>
        {children}

        <Footer />
      </>
    </div>
  );
};
