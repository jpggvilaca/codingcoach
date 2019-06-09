import React from 'react';

const Button = props => {
  const { buttonName, onClick } = props;
  return (
    <div>
      <button onClick={onClick}>{buttonName}</button>
    </div>
  );
};

export default Button;
