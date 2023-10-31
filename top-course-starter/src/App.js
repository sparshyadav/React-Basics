import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
// import { toast } from "react-toastify/dist/components";
import {toast} from "react-toastify";

const App = () => {

  const [courses, setCourses]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await fetch(apiUrl);
        const data=await res.json();
        setCourses(data.data);
      }
      catch(error){
        toast.error("Something Went Wrong");
      }
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards />
    </div>
  )
};

export default App;
