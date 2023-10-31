import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [text, setText]=useState('');

  // useEffect(()=>{
  //   console.log("UseEffect Used");
  // }, []);

  useEffect(()=>{
    console.log("Change Observed");
  }, [text]);
  
  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
