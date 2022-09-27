import React from 'react';

import styles from './Card.module.scss';

type Props = {
  sideA: React.ReactNode;
  sideB: React.ReactNode;
  isFlipped: boolean;
};

export const Card = ({ sideA, sideB, isFlipped }: Props) => {
  return (
    <>
      <div className={styles.Card}>
        <div
          className={styles.sideA}
          style={{ transform: `rotateY(${isFlipped ? 180 : 0}deg)` }}
        >
          {sideA}
        </div>
        <div
          className={styles.sideB}
          style={{
            transform: `rotateY(${isFlipped ? 360 : 180}deg)`,
          }}
        >
          {sideB}
        </div>
      </div>
    </>
  );
};
