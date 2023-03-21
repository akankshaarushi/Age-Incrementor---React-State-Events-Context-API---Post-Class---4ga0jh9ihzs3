import React from 'react';

const Child = (props) => {
  const handleClick = () => {
    props.incrementAge();
  }

  return (
    <div id="child">
      <p id="text">Today I am {props.age} Years of Age</p>
      <button id="button" onClick={handleClick}>Increment Age</button>
    </div>
  );
}

export default Child;
