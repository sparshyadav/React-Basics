import { isVisible } from '@testing-library/user-event/dist/utils';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode:"" });


  function changeHandler(event) {
    const {name, value, checked, type}=event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]:type==='checkbox'?checked:value
        
      }
    });
    // console.log(formData.firstName);
    // console.log(formData.lastName);
    // console.log(formData.email);
    console.log(formData);
  }

  return (
    <div className="App">
      <form>
        <input type='text' placeholder='FirstName' name='firstName' onChange={changeHandler} value={formData.firstName} />
        <input type='text' placeholder='LastName' name='lastName' onChange={changeHandler} value={formData.lastName} />
        <input type='email' placeholder='Email' name='email' onChange={changeHandler} value={formData.email} />
        <textarea placeholder='Enter Your Comments' name='comments' onChange={changeHandler} value={formData.comments} />
        <input type='checkbox' id='isVisible' onChange={changeHandler} checked={formData.isVisible} name='isVisible' />
        <label htmlFor='isVisible'>Am i Visible</label>
        <input type='radio' onChange={changeHandler} name='mode' value='Online Mode' id='Online Mode' />
        <label htmlFor='Online Mode'>Online Mode</label>
        <input type='radio' onChange={changeHandler} name='mode' value='Offline Mode' id='Offline Mode' />
        <label htmlFor='Online Mode'>Offline Mode</label>
      </form>
    </div>
  );
}

export default App;
