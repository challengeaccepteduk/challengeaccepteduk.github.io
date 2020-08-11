import Home from "./index";

const Custom404 = () => {
  return (
      <Home />
  );
};

export async function getStaticProps() {
  return {
    props: {
      seoTitle: 'Discover, track and complete your challenges all in one place',
      seoDescription: 'Challenge Accepted. Discover, track and complete your challenges all in one place.',
      headline: 'Challenge Accepted. Discover, track and complete your challenges all in one place.',
      includeDownloadButtons: true,
      includeRegisterButton: false,
    },
  };
}

export default Custom404;
