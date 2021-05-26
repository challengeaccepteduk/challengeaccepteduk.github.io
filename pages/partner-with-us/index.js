import Content from '../../components/Content';

const PartnerWithUs = () => {
  return (
    <Content>
      <h2>We'll work with you to create an engaging branded challenge on the app that's focused on your customers having fun and taking on a challenge for something you are both passionate about.</h2>
      <p>To find out more about branded challenges and to discuss how we can support your marketing campaign, please <a href="/contact-us">get in touch</a> with us. </p>
      <h2>Virtual fundraising challenges</h2>
      <p>Since the launch of Challenge Accepted in July last year, we've supported charities including Stand Up To Cancer, Shine Cancer Support, RED January, Support Dogs, the British Heart Foundation and Teenage Cancer Trust.  <br/><br/>We can host your fundraising challenges to help fundraisers stay motivated throughout the campaign. We can also work with you to help create new fundraising campaigns for your charity. <br/><br/> If you are a registered UK charity please <a href="/contact-us">get in touch</a> with us to see how we can support your virtual fundraising challenges. </p>
    </Content>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Partner with us',
      seoDescription: 'Working with brands to create fun and interactive challenges',
      headline: 'Working with brands to create fun and interactive challenges',
      includeRegisterButton: false,
    },
  };
}

export default PartnerWithUs;