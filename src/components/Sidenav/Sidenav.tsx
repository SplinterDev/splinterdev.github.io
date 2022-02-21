import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import style from './Sidenav.module.scss';

export function Sidenav(): React.ReactElement {
  const router = useRouter();

  return (
    <nav className={style.Sidenav}>
      <ul>
        <li>
          {/* <NavLink exact activeClassName="active-link" to="/"> */}
          <Link href="/">
            <a className={router.pathname == '/' ? style['active-link'] : ''}>
              home
            </a>
          </Link>
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink activeClassName="active-link" to="/logbook"> */}
          <Link href="/logbook">
            <a
              className={
                router.pathname == '/logbook' ? style['active-link'] : ''
              }
            >
              logbook
            </a>
          </Link>
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink activeClassName="active-link" to="/developer"> */}
          <Link href="/developer">
            <a
              className={
                router.pathname == '/developer' ? style['active-link'] : ''
              }
            >
              developer
            </a>
          </Link>
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink activeClassName="active-link" to="/writer"> */}
          <Link href="/writer">
            <a
              className={
                router.pathname == '/writer' ? style['active-link'] : ''
              }
            >
              writer
            </a>
          </Link>
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink activeClassName="active-link" to="/drummer"> */}
          <Link href="/drummer">
            <a
              className={
                router.pathname == '/drummer' ? style['active-link'] : ''
              }
            >
              drummer
            </a>
          </Link>
          {/* </NavLink> */}
        </li>
      </ul>
    </nav>
  );
}
