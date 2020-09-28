import Content from '../../components/Content';

const PartnerWithUs = () => {
  return (
    <Content>
      <h2>We will work with you to ensure your brand is reaching an audience passionate about what you do on Challenge Accepted, to help you achieve your objective of brand awareness, brand engagement, or website traffic.</h2>
      <h3>Demand Generation</h3>
      <p>Providing offers to our customers that show an interest in your product on Challenge Accepted.</p>
      <h3>Brand awareness and credibility</h3>
      <p>Sponsoring challenges or categories such as health and fitness or film on the Challenge Accepted app.</p>
      <h3>Brand awareness and engagement</h3>
      <p>Working together to create new fun and engaging branded challenge.</p>
    </Content>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Partner with us',
      seoDescription: 'Working with brands to engage customers in a unique way who we know are passionate about your product or industry.',
      headline: 'Working with brands to engage customers in a unique way who we know are passionate about your product or industry.',
      includeRegisterButton: false,
    },
  };
}

export default PartnerWithUs;