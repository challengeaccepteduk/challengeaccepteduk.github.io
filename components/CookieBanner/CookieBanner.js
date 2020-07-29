import Link from 'next/link';
import { useState } from 'react';

import Button from '../Button';

import { wrapper, container, text, button } from './CookieBanner.module.css';
import { hasAcceptedTracking, acceptTracking, get } from '../../lib/localstorage';

const CookieBanner = () => {
  const [hideBanner, setHideBanner] = useState(hasAcceptedTracking())

  if (hideBanner) return null;

  const onButtonClick = () => {
    setHideBanner(true);
    acceptTracking();
  }

  return (
    <div className={wrapper}>
      <div className={container}>
        <p className={text}>By using this site you agree to our <Link href="/cookie-policy"><a>cookie policy</a></Link></p>
        <div className={button}>
          <Button onClick={onButtonClick}>I understand</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;