import Content from '../components/Content';

const Home = () => {
  return (
    <Content>
      <div>
        <h3>Discover challenges</h3>
        <p>Discover challenges in the things you love from sport, travel, health & fitness, food and more. Or create your own challenge.</p>
      </div>
      <div>
        <h3>Set reminders</h3>
        <p>Set notification reminders for your challenges based around your schedule.</p>
      </div>
      <div>
        <h3>Challenge friends</h3>
        <p>Add friends so you can share your progress and see what challenges each other are completing.</p>
      </div>
      <div>
        <h3>Create your own challenges</h3>
        <p>Create your own challenge from scratch based on your goals.</p>
      </div>
    </Content>
  )
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Discover, track and complete your challenges all in one place',
      headline: 'Challenge Accepted. Discover, track and complete your challenges all in one place.',
      includeRegisterButton: true,
    },
  };
}

export default Home;