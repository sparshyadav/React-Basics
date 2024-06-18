import React from 'react'
import "./Item.css";

const Item = (props) => {
  return (
    <div className='nirma'>
      <p>{props.name}</p>
    </div>
  )
}

export default Item
