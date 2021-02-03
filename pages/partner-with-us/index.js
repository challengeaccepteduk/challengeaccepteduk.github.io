import Content from '../../components/Content';

const PartnerWithUs = () => {
  return (
    <Content>
      <h2>We will work with you to ensure your brand is reaching an audience passionate about what you do on the Challenge Accepted app, to help you achieve your objective.</h2>
      <h3>Brand Engagement</h3>
      <p>Together create new fun and engaging brand challenges.</p>
      <h3>Brand Awareness</h3>
      <p>Sponsor categories or challenges on the app.</p>
      <h3>Demand Generation</h3>
      <p>Provide offers that help people complete their challenges.</p><br/><br/>
      <p>We also support fundraising challenges on the app, if you are a registered charity please <a href="/contact-us">get in touch</a> to us to see how we can support your virtual fundraising challenges.</p>
    </Content>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Partner with us',
      seoDescription: 'Working with brands to create fun challenges',
      headline: 'Working with brands to create fun challenges',
      includeRegisterButton: false,
    },
  };
}

export default PartnerWithUs;