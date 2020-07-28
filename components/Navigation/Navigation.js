import { useState } from 'react';

import Link from 'next/link';

import { container, toggle, logo, showNavigation, hideNavigation, item, link } from './Navigation.module.css';

const Navigation = () => {
  const [navigationVisibility, setNavigationVisibility] = useState(false);
  const toggleNavigationVisibility = () => setNavigationVisibility(!navigationVisibility);

  return (
    <nav>
      <div className={container}>
        <div className={logo}><img src="/logo-192-transparent.png" alt="" /></div>
        <button className={toggle} onClick={toggleNavigationVisibility}>{navigationVisibility ? 'Close Navigation' : 'Open Navigation'}</button>
        <ul className={navigationVisibility ? showNavigation : hideNavigation}>
          <li className={item}>
            <Link href="/">
              <a className={link}>Home</a>
            </Link>
          </li>
          <li className={item}>
            <Link href="/about-us">
              <a className={link}>About us</a>
            </Link>
          </li>
          <li className={item}>
            <Link href="/partner-with-us">
              <a className={link}>Partner with us</a>
            </Link>
          </li>
          <li className={item}>
            <Link href="/contact-us">
              <a className={link}>Contact us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;