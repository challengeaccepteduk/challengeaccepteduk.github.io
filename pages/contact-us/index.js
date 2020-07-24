import ContactUsForm from '../../components/ContactUsForm'

const ContactUs = () => <ContactUsForm />;

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Contact us',
      seoDescription: 'Please get in touch with us using the form below to find out about partnership opportunities',
      headline: 'Please get in touch with us using the form below to find out about partnership opportunities',
      includeRegisterButton: false,
    },
  };
}

export default ContactUs;