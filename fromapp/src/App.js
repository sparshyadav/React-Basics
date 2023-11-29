import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });


  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
    console.log(formData.firstName);
  }

  return (
    <div className="App">
      <form>
        <input type='text' placeholder='FirstName' name='firstName' onChange={changeHandler} value={formData.firstName} />
        <input type='text' placeholder='LastName' name='lastName' onChange={changeHandler} value={formData.lastName} />
        <input type='email' placeholder='Email' name='email' onChange={changeHandler} value={formData.email} />
      </form>
    </div>
  );
}

export default App;
