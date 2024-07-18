import React from 'react';
import PropTypes from 'prop-types';

import './featuresItem.scss' 

function FeaturesItem({ image, descriptionImage, title, description }) {
return (
    <div className="feature-item">
        <img src={image} alt={descriptionImage} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
    </div>
);
}

FeaturesItem.propTypes = {
    image: PropTypes.string.isRequired,
    descriptionImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeaturesItem;