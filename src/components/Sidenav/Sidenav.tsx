import React from 'react';
import { FMNavLink } from '../core';
import style from './Sidenav.module.scss';

const LINKS = [
  { url: '/', label: 'home' },
  { url: '/developer', label: 'developer' },
  { url: '/writer', label: 'writer' },
  { url: '/drummer', label: 'drummer' },
];

export function Sidenav(): React.ReactElement {
  return (
    <nav className={style.Sidenav}>
      <ul>
        {LINKS.map((link) => (
          <li key="link.url">
            <FMNavLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
