import React from 'react';
import Card from './Card';
import "./Testimonials.css";

const Testimonials = (props)  => {
    let reviews=props.reviews;
  return (
    <div className='container'>
      <Card review={reviews[0]}/>
    </div>
  )
}

export default Testimonials
