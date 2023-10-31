import React from "react";
import Card from "./Card";

export default function Cards(props) {
    let courses = props.courses;

    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })
        })
        console.log(allCourses);
        // getCourses().map((course)=>{
        //     console.log(course);
        // })
        return allCourses;
    }

    return (
        <div>
           {
            getCourses().map((course)=>{
                <Card key={course.id} course={course} />
            })
           }
        </div>
    )
}