import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "India", state: "" });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='flex flex-col items-center m-2'>
      <form>
        {/* First Name */}
        <label htmlFor='firstName'>First Name</label> <br></br>
        <input type='text' name='firstName' id='firstName' placeholder='Enter Your First Name' value={formData.firstName} onChange={changeHandler} className='outline' /> <br></br> <br></br>

        {/* Last Name */}
        <label htmlFor='firstName'>First Name</label> <br></br>
        <input type='text' name='lastName' id='lastName' placeholder='Enter Your Last Name' value={formData.lastName} onChange={changeHandler} className='outline' /> <br></br> <br></br>

        {/* Email */}
        <label htmlFor='email'>Email</label> <br></br>
        <input type='email' name='email' id='email' placeholder='Enter Your Email' value={formData.email} onChange={changeHandler} className='outline' /> <br></br> <br></br>

        {/* Country */}
        <label htmlFor='country'>Country</label> <br></br>
        <select name='country' id='country' value={formData.country} onChange={changeHandler}>
          <option value='India'>India</option>
          <option value='USA'>USA</option>
          <option value='Germany'>Germany</option>
          <option value='UK'>UK</option>
          <option value='Australia'>Australia</option>
          <option value='Italy'>Italy</option>
          <option value='France'>France</option>
        </select> <br></br> <br></br>

        {/* State */}
        <label htmlFor='state'>State</label> <br></br>
        <input type='state' name='state' id='state' placeholder='Enter Your State' value={formData.state} onChange={changeHandler} className='outline' /> <br></br> <br></br>

        {/* Address */}
        <label htmlFor='address'>Address</label> <br></br>
        <input type='address' name='address' id='address' placeholder='Enter Your Address' value={formData.address} onChange={changeHandler} className='outline' /> <br></br> <br></br>
      </form>
    </div>
  )
}
