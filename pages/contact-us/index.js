import ContactUsForm from '../../components/ContactUsForm'
import Content from '../../components/Content';

const ContactUs = () => (
  <Content>
    <ContactUsForm />
  </Content>
);

export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: 'Contact us',
      headline: 'To find out more about opportunities at launch, get in touch with us below.',
      includeRegisterButton: false,
    },
  };
}

export default ContactUs;