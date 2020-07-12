import { container, image, content, feature, heading, text } from './Index.module.css';

const Home = () => {
  return (
    <section className={container}>
      <div className={content}>
        <div className={feature}>
          <h3 className={heading}>Discover challenges 👀</h3>
          <p className={text}>Discover challenges in the things you love from sport, travel, health & fitness, food and more. Or create your own challenge.</p>
        </div>
        <div className={feature}>
          <h3 className={heading}>Set reminders ⏰</h3>
          <p className={text}>Set notification reminders for your challenges based around your schedule.</p>
        </div>
        <div className={feature}>
          <h3 className={heading}>Challenge friends 🙋‍</h3>
          <p className={text}>Add friends so you can share your progress and see what challenges each other are completing.</p>
        </div>
        <div className={feature}>
          <h3 className={heading}>Create your own challenges 📝</h3>
          <p className={text}>Create your own challenge from scratch based on your goals.</p>
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