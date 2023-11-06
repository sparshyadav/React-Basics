import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import "./Card.css";

const Card = (props) => {
    let review=props.review;
  return (
    <div className='card-container'>
      <div>
        <img src={review.image}></img>
      </div>

      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>

      <div>
        <FaQuoteLeft />
      </div>

      <div>
        {review.text}
      </div>

      <div>
        <FaQuoteRight />
      </div>

      <div>
        <button>
            -
        </button>
        <button>
            +
        </button>
      </div>
      
      <div>
        <button>
            Surprise Me
        </button>
      </div>

    </div>
  )
}

export default Card
