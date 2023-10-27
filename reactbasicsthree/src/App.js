import React, {useState} from "react";
import data from './data.js';
import Tours from "./components/Tours.js";
import './App.css';

const App = () => {
  const [tours, setTours]=useState(data);

  function removeTour(id){
     const newTours=tours.filter(tour=>tour.id!==id);
     setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={()=> setTours(data)}>Refresh</button>
      </div>
    )
  }

  return <div className="wrapper">
    <h1 className="heading">Plan Your Trip</h1>
    <Tours tours={tours} removeTour={removeTour}/>
  </div>;
};

export default App;
