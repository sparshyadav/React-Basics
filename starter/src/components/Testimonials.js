import React from 'react';
import Card from './Card';
import './Testimonials.css';
import { useState } from 'react';

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShift() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShift() {
    if (index + 1 > reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <>
      <div className="container">
        <Card review={reviews[index]} leftShift={leftShift} rightShift={rightShift} />
        <div>
          <button onClick={leftShift}>-</button>
          <button onClick={rightShift}>+</button>
        </div>

        <div>
          <button onClick={surpriseHandler}>Surprise Me</button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
