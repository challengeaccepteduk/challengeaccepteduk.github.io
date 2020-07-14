import Link from 'next/link';

import { primary } from './Button.module.css';

const Button = ({ href, type, children, disabled }) => {
  if (type === 'submit') return (<button type="submit" className={primary} disabled={disabled}>{children}</button>);
  return (<Link href={href}><a className={primary}>{children}</a></Link>);
};

export default Button;