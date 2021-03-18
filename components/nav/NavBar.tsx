import React from 'react';
import Link from 'next/link';
import { Nav } from './Nav';
export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href='/'>
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href='/guitars'>
            <a>GUITARS</a>
          </Link>
        </li>
        <li>
          <Link href='/artists'>
            <a>ARTISTS</a>
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
