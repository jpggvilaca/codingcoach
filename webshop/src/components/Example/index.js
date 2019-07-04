// FOR DEMONSTRATION PURPOSES ONLY. DELETE THIS FOLDER AND COMPONENT AFTERWARDS
import React, { useState, useEffect } from 'react';

const RandomComponent = () => {
  const [value, setValue] = useState(0);

  const updateValue = e => {
    const { value } = e.currentTarget;

    // setValue will do the same as this.setState() from classes;
    setValue(value);
  }

  useEffect(() => {
    console.log('I will log on the console everytime this component renders!')
  }, [value]); // the second argument means the code inside useEffect MUST run if that argument changes, in this case, `value`

  return (
    <div>
      <h1>Value: {value}</h1>
      <input type="number" onChange={updateValue} value={value} />
    </div>
  )
}

export default RandomComponent;
