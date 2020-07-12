import { container } from './Content.module.css';

const Content = ({ children }) => (<section className={container}>{children}</section>);

export default Content;