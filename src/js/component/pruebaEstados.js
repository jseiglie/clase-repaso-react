import React, { useEffect, useState } from "react";

export const PruebaEstados = () => {
    const [num, setNum] = useState(0);

    const [todos, setTodos] = useState(['sacar al perro', 'hacer la cama', 'matar dragones'])

    useEffect(() => {
        // console.log('se ha modificado num, su nuevo valor es ---> ', num);
        // console.log('el nuevo valor es par? ---> ', num%2==0);
        //actualizarTodosBack()
    }, [todos])

    const handleClick = () => {
        setNum(num + 1)
    }
    const handleClickMenos = () => {
        setNum(num - 1)
    }
    console.log('log de prueba de estados')
    //se pasa la funcion dentro de onClick SIN parentesis, porque sino, se ejecuta al momento en que JS lo lee

    return (
        <>
            <h1>{num}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClickMenos}>-</button>

        </>
    )
}