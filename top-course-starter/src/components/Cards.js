import React, { useState } from "react";
import Card from "./Card";
import "./Cards.css";

export default function Cards(props) {
    let courses = props.courses;
    const [likedCourses, setLikedCourses]=useState([]);

    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            });
        });
        return allCourses;
    }


    return (
        <div className="cards-container">
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                ))
            }
        </div>
    );
}
