import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { MyBtn } from "../component/MyBtn";
import { Card } from "../component/card";
import { PruebaEstados } from "../component/pruebaEstados";

export const Home = () => {
	//js



	const sayHi = (nombre) => {
		console.log('hola ' + nombre);
	}
	sayHi('lola')
	//props

	/*
	.map((el, i)=> {})
	*/

	const [respApi, setRespApi] = useState([])

	useEffect(()=>{

		//checkCookies()
	},[])

	//mapeo de componentes
	//respuesta de una API
	//data.map((el, i) => <Card key={i} src={el.src} alt={el.alt} description={el.desc} />)


	const [val, setVal] = useState(1)
	let count = 0
	console.log('valor de mi estado val -----> ', val)
	const handleClick = () => {
		setVal(val + 1)
		console.log('me estas tocando', count);
		count++

	}
	const handleClickMenos = () => {
		setVal(val - 1)
		console.log('me estas tocando', count);
		count--
	}





	const data = [{ src: 'img1', alt: 'alt1', desc: 'description de la primera imagen, porque es muy importante ser la primera imagen!' }, { src: 'img2', alt: 'alt2', desc: 'description2' }, { src: 'img3', alt: 'alt3', desc: 'description3' }, { src: 'img1', alt: 'alt1', desc: 'description' }, { src: 'img2', alt: 'alt2', desc: 'description2' }, { src: 'img3', alt: 'alt3', desc: 'description3' }, { src: 'img1', alt: 'alt1', desc: 'description' }, { src: 'img2', alt: 'alt2', desc: 'description2' }, { src: 'img3', alt: 'alt3', desc: 'description3' }, { src: 'img1', alt: 'alt1', desc: 'description' }, { src: 'img2', alt: 'alt2', desc: 'description2' }, { src: 'img3', alt: 'alt3', desc: 'description3' }, { src: 'img1', alt: 'alt1', desc: 'description' }, { src: 'img2', alt: 'alt2', desc: 'description2' }, { src: 'img3', alt: 'alt3', desc: 'description3' }, { src: 'img1', alt: 'alt1', desc: 'description' }, { src: 'img2', alt: 'alt2', desc: 'description2' }, { src: 'img3', alt: 'alt3', desc: 'description3' }]


	/*
	useEffect(funcion, [] ---> array de dependencias
	)
	
	[] ---> onload
	*/

	//window.onLoad
	const [paraEffect, setParaEffect] = useState('')
	// useEffect(()=>{
	// 	console.log('++++++++++++++++++++++++++++useEffect en toda su gracia!+++++++++++++++++++++++++++++++++++++');
	// 	setParaEffect('tu mensaje')
	// },[])
	const funcionEffect = () => {
		console.log('++++++++++++++++++++++++++++useEffect en toda su gracia!+++++++++++++++++++++++++++++++++++++');
		setParaEffect('tu mensaje');
	}

	//()=>{} funcion anonima

	useEffect(funcionEffect, [])








	return (
		<div className="text-center mt-5">
			<PruebaEstados />
			<div className="bg-warning">
				<h1>{val}</h1>
				{paraEffect}
				<button onClick={handleClick}>+</button>
				<button onClick={handleClickMenos}>-</button>
			</div>
			{
				//puedo escribir js
				respApi.map((el, i) => <Card key={i} number={val} src={el.src} alt={el.alt} description={el.desc} />)
			}
		</div>
	);
}

