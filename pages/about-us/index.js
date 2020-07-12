import Content from '../../components/Content';

const AboutUs = () => {
  return (
    <Content>
      <h2>Challenge Accepted is the app to help people discover, track and complete their personal challenges. Such as:</h2>
      <ol>
        <li><strong>Fitness challenges</strong> e.g. 30 day workout</li>
        <li><strong>Passion challenges</strong> e.g. see every premiership football team</li>
        <li><strong>Travel challenge</strong> e.g. visit every city in Europe</li>
        <li><strong>Custom challenges</strong> e.g. 12 books I'm going to read this year</li>
      </ol>

      <h2>Business model</h2>
      <p>For partners, this means a new route to talk to customers knowing that we’re aligning them with users who are passionate about their product or industry. Brands can partner with Challenge Accepted to create their own company challenge, sponsor challenges or categories, and promote deals to customers that help with their passions e.g. a cinema offer to help users complete a film challenge.</p>

      <h2>Founders</h2>
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>Paul Johnson</th>
          <th>Steph Mandeville</th>
        </tr>
        <tr>
          <th>Experience</th>
          <td>GSK, Fujitsu, TomTom, William Hill, Sky</td>
          <td>Intel, EE, BT, TodayTix</td>
        </tr>
        <tr>
          <th>University</th>
          <td>Computer Science and Mathematics BSc from Bath University, 2:1 Hons</td>
          <td>Marketing Management BA from DeMontfort University, 1st Class Hons</td>
        </tr>
        <tr>
          <th>Focus</th>
          <td>Software development and test engineering</td>
          <td>App scope & design, business development & operations, brand & marketing, finance</td>
        </tr>
        <tr>
          <th>Challenges</th>
          <td>
            <ul>
              <li>Daily Squats</li>
              <li>Trying every Dairy milk chocolate</li>
              <li>Watching every Will Smith film</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>30 days of Yoga with Adriene on YouTube</li>
              <li>Visiting every country in Europe</li>
              <li>Watching every Disney animation film</li>
            </ul>
          </td>
        </tr>
      </table>

      <h2>Our story</h2>
      <p>Challenge Accepted started when we found ourselves actively working on loads of our own challenges and tracking them in many different ways from a scratch map for travel, a list on our phones for books to read that year, a 30-day squat challenge app, an app to track football stadiums visited, starts on our Google maps for restaurants we wanted to visit, together attempting to climb all 7 mountains around Bergen, and many more. Like many people we know, had a million and one personal challenges we were trying to complete but had no one place to keep track of them all, so we were unlikely to finish them or even forget we started some.</p>
      <p>Our new challenge became creating an app to help us track and therefore ultimately complete our many challenges.</p>
      <p>Steph, given her background in brand and marketing across large tech companies and a start up app, took on the role of scoping the app design, defining the brand and business plan. Along the way having to pick up some new skills from finance and legal to brushing up photoshop skills. Paul, who has a background of programming at large tech, gaming, fitness and telco companies, developed the website, app and CMS from scratch and managed all the product testing. This required learning additional programming languages and new programming skills along the way.</p>
      <p>We’re currently in the testing phase and are on track to launch the Challenge Accepted app on both the Google Play Store and Apple app store in June 2020.</p>
    </Content>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: 'About us',
      headline: 'Our mission is to give people the inspiration and tools to complete personal challenges, no matter how big or small.',
      includeRegisterButton: true,
    },
  };
}

export default AboutUs;