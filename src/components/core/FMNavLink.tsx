import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import style from './FMNavLink.module.scss';

type Props = {
  label: string;
  url: string;
};

export const FMNavLink = ({ label, url }: Props) => {
  const router = useRouter();

  const classes = [
    style.FMNavLink,
    router.pathname == url ? style['active-link'] : '',
  ];

  return (
    <Link href={url}>
      <a className={classes.join(' ')}>{label}</a>
    </Link>
  );
};
