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
      <p>Provide offers that help people complete their challenges.</p><br/>
      <h2>Virtual fundraising challenges</h2>
      <p>Since the launch of Challenge Accepted in July last year, we've supported charities including Stand Up To Cancer, Shine Cancer Support, RED January, Support Dogs, the British Heart Foundation and Teenage Cancer Trust.  <br/><br/>We can host your fundraising challenges to help fundraisers stay motivated throughout the campaign. We can also work with you to help create new fundraising campaigns for your charity. <br/><br/> If you are a registered charity please <a href="/contact-us">get in touch</a> to us to see how we can support your virtual fundraising challenges. </p>
    </Content>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Partner with us',
      seoDescription: 'Working with brands to create fun, interactive challenges',
      headline: 'Working with brands to create fun, interactive challenges',
      includeRegisterButton: false,
    },
  };
}

export default PartnerWithUs;