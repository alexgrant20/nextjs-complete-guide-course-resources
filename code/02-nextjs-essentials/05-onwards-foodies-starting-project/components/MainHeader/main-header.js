'use client';

import Link from 'next/link';

import logoImg from '@/assets/logo.png';

import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import { usePathname } from 'next/navigation';
import NavLink from './nav-link';

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            width={100}
            height={100}
            src={logoImg.src}
            alt="logo"
            priority
          />
          NextJsFoodiez
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
