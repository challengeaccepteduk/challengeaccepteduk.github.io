import Link from 'next/link';

import RegisterYourInterestForm from '../RegisterYourInterestForm';
import CookieBanner from '../CookieBanner';
import DownloadButtons from '../DownloadButtons';

import {
  FACEBOOK_URL,
  TWITTER_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PLAY_STORE, IOS_STORE,
  MEDIUM
} from '../../constants/social';
import { wrapper, container, navigation, heading, link } from './Footer.module.css';

const Footer = () => (
  <>
    <footer className={wrapper}>
      <div className={container}>
        {/*<RegisterYourInterestForm />*/}
        <DownloadButtons />
        <ul className={navigation}>
          <li>
            <h1 className={heading}>Learn more</h1>
            <ul>
              <li>
                <Link href="/about-us">
                  <a className={link}>About us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a className={link}>Contact us</a>
                </Link>
              </li>
              <li>
                <ul>
                  <a href={MEDIUM} className={link}>Blog</a>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h1 className={heading}>The legal bit</h1>
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
            <h1 className={heading}>Follow us</h1>
            <ul>
              <li><a href={FACEBOOK_URL} className={link}>Facebook</a></li>
              <li><a href={TWITTER_URL} className={link}>Twitter</a></li>
              <li><a href={INSTAGRAM_URL} className={link}>Instagram</a></li>
              <li><a href={LINKEDIN_URL} className={link}>LinkedIn</a></li>
            </ul>
          </li>
          <li>
            <h1 className={heading}>Download Challenge Accepted</h1>
            <ul>
              <li>
                  <a href={PLAY_STORE} className={link}>Android download</a>
              </li>
              <li>
                  <a href={IOS_STORE} className={link}>Apple download</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
    <CookieBanner />
  </>
)

export default Footer;
