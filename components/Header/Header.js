import Navigation from '../Navigation';
import Button from '../Button';

import { wrapper, container, heading, button } from './Header.module.css';

const Header = (props) => {
  const { includeRegisterButton, headline } = props;
  console.log('props', props);
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