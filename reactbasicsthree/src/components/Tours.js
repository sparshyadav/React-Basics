import Card from "./Card.js";
import './Tours.css';

export default function Tours({tours, removeTour}){
    return(
        <div className="container">
            {tours.map((tour)=>{
                return(
                    <div>
                        <Card {...tour} removeTour={removeTour} />
                    </div>
                )
            })}
        </div>
    )
}