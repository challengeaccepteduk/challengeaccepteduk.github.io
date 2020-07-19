import { useEffect, useRef, useState } from 'react';
import { container, image, content, feature, heading, text } from './Index.module.css';

const featuresContent = [
  {
    heading: 'Discover challenges 👀',
    text: 'Discover challenges in the things you love from sport, travel, health & fitness, food and more. Or create your own challenge.',
  },
  {
    heading: 'Set reminders ⏰',
    text: 'Set notification reminders for your challenges based around your schedule.',
  },
  {
    heading: 'Challenge friends 🙋‍',
    text: 'Add friends so you can share your progress and see what challenges each other are completing.',
  },
  {
    heading: 'Create your own challenges 📝',
    text: 'Create your own challenge from scratch based on your goals.',
  },
];

const featuresImages = [
  '/Home/iphone-sample-yes-01_2x.png',
];

const Home = () => {
  const featuresList = useRef(null);
  const featuresImage = useRef(null);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    // Get the direct descendents of the featuresList, as these are the actual features.
    const features = featuresList && featuresList.current.querySelectorAll(':scope > div');
    const observer = new IntersectionObserver((entries, observer) => {
      const target = entries && entries.length && entries.filter(entry => entry.isIntersecting).target;
      const item = target && target.getAttribute('data-item');
      if (item) return setCurrentFeature(parseInt(item));
    }, { threshold: .8 });

    features.forEach(feature => observer.observe(feature));

    // When the component unmounts (on a page navigation), remove the observers.
    return () => observer.disconnect();
  });

  console.log({currentFeature})

  return (
    <section className={container}>
      <figure className={image}>
        <img src={featuresImages[currentFeature]} alt="" ref={featuresImage} />
      </figure>
      <div className={content} ref={featuresList}>
        {featuresContent.map((content, i) => {
          return (
            // Add a `data-item` attribute so we can query that from the intersection observer callback.
            // We will use the `data-item` attribute value to get the correct image to display as the user scrolls.
            <div className={feature} data-item={i} key={content.heading}>
              <h3 className={heading}>{content.heading}</h3>
              <p className={text}>{content.text}</p>
            </div>
          );
        })}
      </div>
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