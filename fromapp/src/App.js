import { isVisible } from '@testing-library/user-event/dist/utils';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" });


  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value

      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the Entire Form");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='FirstName' name='firstName' onChange={changeHandler} value={formData.firstName} />
        <input type='text' placeholder='LastName' name='lastName' onChange={changeHandler} value={formData.lastName} />
        <input type='email' placeholder='Email' name='email' onChange={changeHandler} value={formData.email} />
        <textarea placeholder='Enter Your Comments' name='comments' onChange={changeHandler} value={formData.comments} />
        <input type='checkbox' id='isVisible' onChange={changeHandler} checked={formData.isVisible} name='isVisible' />
        <label htmlFor='isVisible'>Am i Visible</label>
        <input type='radio' onChange={changeHandler} name='mode' value='Online Mode' id='Online Mode' checked={formData.mode === "Online Mode"} />
        <label htmlFor='Online Mode'>Online Mode</label>
        <input type='radio' onChange={changeHandler} name='mode' value='Offline Mode' id='Offline Mode' checked={formData.mode === "Offline Mode"} />
        <label htmlFor='Online Mode'>Offline Mode</label> <br></br>
        <select name='favCar' id='favCar' value={formData.favCar} onChange={changeHandler}>
          <option value="Scorpio">Scorpio</option>
          <option value="Harrier">Harrier</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
        </select>
        <label htmlFor='favCar'> Tell Me Your Favourite Car</label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
