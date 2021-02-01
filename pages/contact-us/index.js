import ContactUsForm from '../../components/ContactUsForm'

const ContactUs = () => <ContactUsForm />;

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Contact us',
      seoDescription: 'Please get in touch if you have any questions or would like to discuss partnership opportunities',
      headline: 'Please get in touch if you have any questions or would like to discuss partnership opportunities',
      includeRegisterButton: false,
    },
  };
}

export default ContactUs;