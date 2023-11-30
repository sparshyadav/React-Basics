import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "India", state: "", postalCode: "", address: "", comments: false, candidate: false, offers: false });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally Printing the Form Data");
    console.log(formData);
  }

  return (
    <div className='flex flex-col items-center m-2'>
      <form onSubmit={submitHandler}>
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

        {/* Postal Code */}
        <label htmlFor='postalCode'>Postal Code</label> <br></br>
        <input type='postalCode' name='postalCode' id='postalCode' placeholder='Enter Your ZIP Code' value={formData.postalCode} onChange={changeHandler} className='outline' /> <br></br> <br></br>

        <fieldset>
          <legend>By Email</legend>
          {/* Comments */}
          <input type='checkbox' id='comments' name='comments' checked={formData.comments} onChange={changeHandler} />
          <label htmlFor='comments'>Comments</label> <br></br>
          <p>Get Notified when someone post a comment on the posting.</p>

          {/* Candidate */}
          <input type='checkbox' id='candidate' name='candidate' checked={formData.candidate} onChange={changeHandler} />
          <label htmlFor='candidate'>Comments</label> <br></br>
          <p>Get Notified when someone new posts for new role.</p>

          {/* Offers */}
          <input type='checkbox' id='offers' name='offers' checked={formData.offers} onChange={changeHandler} />
          <label htmlFor='offers'>Comments</label> <br></br>
          <p>Get Notified whenever there is a offer going on.</p>
        </fieldset>

        <button>Save</button>
      </form>
    </div>
  )
}
