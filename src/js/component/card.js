import React from "react";
import { MyBtn } from "./MyBtn";

export const Card = ({number,src, alt, description}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={src}  alt={alt}/>
            <div className="card-body">
                <h1>{number}</h1>
                <p>{description}</p>
                <MyBtn texto={'Learn more!'}/>
            </div>
        </div>
    )
}