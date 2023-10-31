import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
// import { toast } from "react-toastify/dist/components";
import {toast} from "react-toastify";

const App = () => {

  const [courses, setCourses]=useState(null);

  async function fetchData(){
    try{
      let response=await fetch(apiUrl);
      let data=await response.json();
      setCourses(data);
    }
    catch(error){
      toast.error("Problem with Network");
    }
  }

  useEffect(()=>{
    fetchData();
  })

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards />
    </div>
  )
};

export default App;
