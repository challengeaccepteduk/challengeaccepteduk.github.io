import UnsubscribeForm from "../../components/UnsubscribeForm";
const Unsubscribe = () => <UnsubscribeForm/>;

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Unsubscribe',
      seoDescription: "We're sorry to see you go, submit your email below to be removed from our mailing list",
      headline: 'We\'re sorry to see you go, submit your email below to be removed from our mailing list',
      includeRegisterButton: false,
    },
  };
}

export default Unsubscribe;