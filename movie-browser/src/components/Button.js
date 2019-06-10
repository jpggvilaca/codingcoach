import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, onClick } = props;

  return (
    <div>
      <button onClick={onClick}>{buttonName}</button>
    </div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
