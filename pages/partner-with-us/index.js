import Content from '../../components/Content';

const PartnerWithUs = () => {
  return (
    <Content>
      <h1>Challenge Accepted creates fun and engaging challenges for people to take part in from health and fitness to travel, theatre and more. We help thousands of people stay motivated with what they start.</h1>
      <h2>Supporting marketing campaigns on Challenge Accepted</h2>
      <p>We take a different approach to supporting your campaign from traditional adverts. We can work with you to create an engaging branded challenge on the app that's focused on your customers having fun and taking on a challenge for something you are both passionate about.
      <br/><br/> 🚀 Engage your audience with a bespoke challenge on the app
      <br/> 🏷️ Help people complete their challenge with an offer for your brand
      <br/> 🎯 Target people based on their interests, not demographics
      <br/><br/> To find out more about branded challenges and to discuss how we can support your marketing campaign, please <a href="/contact-us">get in touch</a> with us. </p>
      <h2>Supporting UK charities</h2>
      <p>Since the launch of Challenge Accepted in July last year, we've had over 1,000 people participate in virtual fundraising challenges on the app from UK charities including:</p>

      <div class="scrollable-table-outer wrapper">
      <table class="scrollable-table-inner">
      <tbody>
        <tr>
            <td><img src="/Partners/bhf-logo.png" alt="British Heart Foundation" /></td>
            <td><img src="/Partners/tct-logo.png" alt="Teenage Cancer Trust" /></td>
        </tr>
        <tr>
            <td><img src="/Partners/su2c-logo.png" alt="Stand Up To Cancer" /></td>
            <td><img src="/Partners/shine-logo.png" alt="Shine Cancer Support" /></td>
        </tr>
        </tbody>
      </table>
      </div>

      <p>We can support UK charities by hosting fundraising events on the app to help participants keep track and stay motivated throughout the campaign.
      <br/><br/>If you are a registered UK charity please <a href="/contact-us">get in touch</a> with us to see how we can support your virtual fundraising challenges. </p>
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