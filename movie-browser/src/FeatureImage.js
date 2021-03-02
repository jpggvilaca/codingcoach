import React from 'react';
import cat from './images/cat.jpg'; // gives image path
const FeatureImage = () => {
  return (
    <div>
      <img style={{ height: 300 }} src={cat} alt='' />
    </div>
  );
};

export default FeatureImage;
