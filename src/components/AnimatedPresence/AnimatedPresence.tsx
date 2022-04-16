import React from 'react';
import styles from './AnimatedPresence.module.scss';

type Props = {
  children: React.ReactNode;
};

export const AnimatedPresence = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <>
        {children}

        <footer>Copyright &copy; 2022 FJCMontenegro</footer>
      </>
    </div>
  );
};
