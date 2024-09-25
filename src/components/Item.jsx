import React from 'react'
import shopCSS from './shop.module.css'
import { useState, useContext } from 'react';
import { CartContext } from '../App';

export default function Item ({product}) {
	const {cart, setCart} = useContext(CartContext)

	function addToCart (item) {
		setCart(
			[
				...cart, item
			]
		)
		// console.log(cart)
	}


	return (
		<div className={shopCSS.card}>
			<p>{product.title}</p>
			<img src={product.image} alt={"placeholder text"} />
			<p>Price: ${product.price}</p>
			<label htmlFor="">Amount: </label>
			<input type="number" className={shopCSS.amountInput}/>
			<button onClick={() => addToCart(product)} >Add to Cart </button>
		</div>
		)
}