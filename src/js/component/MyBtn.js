import React from "react";

export const MyBtn = (props) => {
    //props *---> es un objeto
    console.log(props)
    console.log(props.color, props.texto);
    //{texto} desestructurando props
// console.log(texto)
// console.log(color)

    return (
        <button className="btn btn-primary p-5 mx-5">{props.texto}</button>
        // <button className="btn btn-primary p-5 mx-5">{texto}</button>

    )
}