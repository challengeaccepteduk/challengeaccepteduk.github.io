import Navigation from '../Navigation';
import Button from '../Button';

import { wrapper, container, heading, button } from './Header.module.css';
// <img src="/app-store-badge.png" alt="" width="180" />
// <img src="/google-play-badge.png" alt="" width="180" />

const Header = ({ includeRegisterButton, headline }) => {
  return (
    <header className={wrapper}>
      <Navigation />
      <div className={container}>
        <h1 className={heading}>{headline}</h1>
        {includeRegisterButton && <Button href="/register-your-interest">Register your interest</Button>}
      </div>
    </header>
  );
};

export default Header;