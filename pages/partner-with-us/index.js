import Content from '../../components/Content';

const PartnerWithUs = () => {
  return (
    <Content>
      <h2>We will work with you to ensure your brand is reaching the right audience based on showing an active interest and passion for your product or industry and therefore help achieve your brand objective of brand awareness, engagement or traffic.</h2>
      <h3>Demand Generation</h3>
      <p>Providing offers to our base of customers that show an interest in your product.</p>
      <h3>Brand awareness and credibility</h3>
      <p>Sponsoring challenges or categories.</p>
      <h3>Brand awareness and engagement</h3>
      <p>Working together to create a challenge relevant for your brand.</p>
    </Content>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: 'Partner with us',
      headline: 'Working with brands to engage customers in a unique way who we know are passionate about your product or industry.',
      includeRegisterButton: false,
    },
  };
}

export default PartnerWithUs;