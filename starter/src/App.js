import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div>
          <h1>Our Testimonials</h1>
          <div></div>
        </div>
        <Testimonials reviews={reviews} />
      </div>
    </>
  )
};

export default App;
