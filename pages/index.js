import { container, image, content, text } from './Index.module.css';

const Home = () => {
  return (
    <section className={container}>
      <div className={content}>
        <div className={text}>
          <h3>Discover challenges</h3>
          <p>Discover challenges in the things you love from sport, travel, health & fitness, food and more. Or create your own challenge.</p>
        </div>
        <div className={text}>
          <h3>Set reminders</h3>
          <p>Set notification reminders for your challenges based around your schedule.</p>
        </div>
        <div className={text}>
          <h3>Challenge friends</h3>
          <p>Add friends so you can share your progress and see what challenges each other are completing.</p>
        </div>
        <div className={text}>
          <h3>Create your own challenges</h3>
          <p>Create your own challenge from scratch based on your goals.</p>
        </div>
      </div>
      <figure className={image}>
        <img src="/Home/iphone-sample-yes-01_2x.png" alt="" />
      </figure>
    </section>
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