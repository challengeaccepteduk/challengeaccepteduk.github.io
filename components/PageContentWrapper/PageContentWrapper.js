import { container } from './PageContentWrapper.module.css';

const PageContentWrapper = ({ children }) => (<section className={container}>{children}</section>);

export default PageContentWrapper;