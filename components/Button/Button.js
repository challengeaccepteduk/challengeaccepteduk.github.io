import Link from 'next/link';

import { primary } from './Button.module.css';

const Button = ({ href, type, children, disabled, onClick }) => {
  if (type === 'submit') return (<button type="submit" className={primary} disabled={disabled} onClick={onClick}>{children}</button>);
  if (href) return (<Link href={href}><a className={primary} onClick={onClick}>{children}</a></Link>);
  return (<button type="submit" className={primary} disabled={disabled} onClick={onClick}>{children}</button>);
};

export default Button;