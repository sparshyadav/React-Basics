import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import "./Card.css";
import {toast} from 'react-toastify';

export default function Card(props) {
    let course=props.course;
    let desc=course.description.substring(0, 200);
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses; 

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>{
                prev.filter((cid)=>
                    (cid!==course.id)
                )
            })
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className="card">
            <div className="image">
                <img src={course.image.url}></img>
            </div>
            <div className="icon">
                <button className="icon-btn" onClick={clickHandler}>
                    <FcLike />
                </button>
           </div>
            <div className="data">
                <h3>{course.title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}