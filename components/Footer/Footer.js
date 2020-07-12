import Link from 'next/link';

import RegisterYourInterestForm from '../RegisterYourInterestForm';

import { FACEBOOK_URL, TWITTER_URL } from '../../constants/social';
import { wrapper, container, navigation, heading, link } from './Footer.module.css';

const Footer = () => (
  <footer className={wrapper}>
    <div className={container}>
      <RegisterYourInterestForm />
      <ul className={navigation}>
        <li>
          <h3 className={heading}>Learn more about the Company</h3>
          <ul>
            <li>
              <Link href="/about-us">
                <a className={link}>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a className={link}>Contact us</a>
              </Link>
            </li>
            <li>
              <Link href="/latest-news">
                <a className={link}>Latest news</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className={heading}>The legal bit</h3>
          <ul>
            <li>
              <Link href="/privacy-policy">
                <a className={link}>Privacy policy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">
                <a className={link}>Terms &amp; Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy">
                <a className={link}>Cookie policy</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className={heading}>Follow us online</h3>
          <ul>
            <li><a href={FACEBOOK_URL} className={link}>Facebook</a></li>
            <li><a href={TWITTER_URL} className={link}>Twitter</a></li>
          </ul>
        </li>
        <li>
          <h3 className={heading}>Sign up to the App</h3>
          <ul>
            <li>
              <Link href="/register-your-interest">
                <a className={link}>Register your interest</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer;