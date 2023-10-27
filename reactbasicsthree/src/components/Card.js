import React, { useState } from "react";
import './Card.css';

export default function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}`;

    const readMoreHandler = () => {
        setReadmore(!readmore);
    }

    return (
        <>
            <div className="card">
                <img src={image} className="image"></img>
                <div className="tour-info">
                    <div className="tour-details">
                        <h4 className="tour-price">$ {price}</h4>
                        <h4 className="tour-name">{name}</h4>
                    </div>
                    <div className="description">
                        {description}
                        <span onClick={readMoreHandler} className="readmore hover">
                            {readmore ? `...show less` : `...read more`}
                        </span>
                    </div>
                </div>
                <button className="hover" onClick={() => removeTour(id)}>Not Interested</button>
            </div>
        </>
    )
}