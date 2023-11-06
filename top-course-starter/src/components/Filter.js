import React from "react";
import "./Filter.css";

export default function Filter(props) {
    let filterData=props.filterData;
    return (
        <div className="container">
            {filterData.map((data) => {
                return(
                    <button key={data.id}>
                        {data.title}
                    </button>
                )
            })}
        </div>
    )
}