import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
import "./App.css";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setCourses(data.data);
      console.log(courses);
    }
    catch (error) {
      toast.error("Problem with Network");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="app">
      <Navbar />

      <Filter filterData={filterData} />

      {loading ? (<Spinner />) : (<Cards courses={courses} />)}

    </div>
  )
};

      export default App;
