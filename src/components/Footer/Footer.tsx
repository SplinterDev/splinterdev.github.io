import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <p className={styles.links}>
        <a
          href="https://twitter.com/fjcmontenegro"
          target="_blank"
          rel="noreferrer"
        >
          🐦
        </a>
        <a
          href="https://medium.com/@fjcmontenegro"
          target="_blank"
          rel="noreferrer"
        >
          📝
        </a>
        <a
          href="https://www.instagram.com/fjcmontenegro/"
          target="_blank"
          rel="noreferrer"
        >
          📷
        </a>
      </p>
      <p>Copyright &copy; 2022 FJCMontenegro</p>
    </footer>
  );
};
