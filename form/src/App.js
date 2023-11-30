import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email:"" });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form>
        {/* First Name */}
        <label htmlFor='firstName'>First Name</label> <br></br>
        <input type='text' name='firstName' id='firstName' placeholder='Enter Your First Name' value={formData.firstName} onChange={changeHandler} /> <br></br> <br></br>

        {/* Last Name */}
        <label htmlFor='firstName'>First Name</label> <br></br>
        <input type='text' name='lastName' id='lastName' placeholder='Enter Your Last Name' value={formData.lastName} onChange={changeHandler} /> <br></br> <br></br>

        {/* Email */}
        <label htmlFor='email'>Email</label> <br></br>
        <input type='email' name='email' id='email' placeholder='Enter Your Email' value={formData.email} onChange={changeHandler} /> <br></br> <br></br>

        
      </form>
    </div>
  )
}
