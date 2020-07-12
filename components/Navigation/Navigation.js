import Link from 'next/link';

import { container, link } from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul className={container}>
      <li><Link href="/">
        <a className={link}>Home</a>
      </Link></li>
      <li><Link href="/about-us">
        <a className={link}>About us</a>
      </Link></li>
      <li><Link href="/partner-with-us">
        <a className={link}>Partner with us</a>
      </Link></li>
      <li><Link href="/contact-us">
        <a className={link}>Contact us</a>
      </Link></li>
    </ul>
  </nav>
);

export default Navigation;