import { useEffect, useRef, useState } from 'react';
import { container, image, content, feature, heading, text } from './Index.module.css';

const featuresContent = [
  {
    image: '/Home/Discover-iPhone.png',
    heading: 'Discover challenges 👀',
    text: 'Discover challenges in the things you love from sport, travel, health & fitness, food and more. Or create your own challenge.',
  },
  {
    image: '/Home/Reminder-iPhone.png',
    heading: 'Set reminders ⏰',
    text: 'Set notification reminders for your challenges based around your schedule.',
  },
  {
    image: '/Home/Friends-iPhone.png',
    heading: 'Challenge friends 🙋‍',
    text: 'Add friends so you can share your progress and see what challenges each other are completing.',
  },
  {
    image: '/Home/Create-Your-Own-iPhone.png',
    heading: 'Create your own challenges 📝',
    text: 'Create your own challenge from scratch based on your goals.',
  },
];

const Home = () => {
  const featuresList = useRef(null);
  const featuresImage = useRef(null);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    // Get the direct descendents of the featuresList, as these are the actual features.
    const features = featuresList && featuresList.current.querySelectorAll(':scope > div');
    const observer = new IntersectionObserver((entries, observer) => {
      const visibleFeature = entries.filter(({ isIntersecting }) => isIntersecting)[0];
      const item = visibleFeature && visibleFeature.target && visibleFeature.target.getAttribute('data-item');
      // // If there is an item value, convert it from a string into a number,
      // // and set that value as the current feature.
      if (item) return setCurrentFeature(parseInt(item));
    }, { threshold: .8 });

    features.forEach(feature => observer.observe(feature));

    // When the component unmounts (on a page navigation), remove the observers.
    return () => observer.disconnect();
  });

  return (
    <div className={container}>
      <figure className={image}>
        <img src={featuresContent[currentFeature] && featuresContent[currentFeature].image} alt="" ref={featuresImage} />
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
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      seoTitle: 'Discover, track and complete your challenges all in one place',
      seoDescription: 'Challenge Accepted. Discover, track and complete your challenges all in one place.',
      headline: 'Challenge Accepted. Discover, track and complete your challenges all in one place.',
      includeDownloadButtons: true,
    },
  };
}

export default Home;