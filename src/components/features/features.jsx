import React from 'react';
import FeatureItem from '../featuresItem/featuresItem';
import FeaturesItemData from '../../data/featuresItemData.json';
import IconChat from '../../assets/icons/icon-chat.webp';
import IconMoney from '../../assets/icons/icon-money.webp';
import IconSecurity from '../../assets/icons/icon-security.webp';
import './features.scss';

function Features() {
  const imageData = {
    "icon-chat.webp": IconChat,
    "icon-money.webp": IconMoney,
    "icon-security.webp": IconSecurity
  };

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {FeaturesItemData.map((data) => (
        <FeatureItem
          key={data.id}
          image={imageData[data.image]}
          descriptionImage={data.descriptionImage}
          title={data.title}
          description={data.description}
        />
      ))}
    </section>
  );
}

export default Features;
