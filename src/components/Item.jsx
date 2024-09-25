import React from 'react'
import shopCSS from './shop.module.css'
import { useState, useContext } from 'react';
import { CartContext } from '../App';

export default function Item ({product}) {
	const {cart, setCart} = useContext(CartContext)

	const [amount, setAmount] = useState(1)

	function addToCart (item) {
		setCart({ ...cart, [item.id]: { item: item, amount: amount } })
		console.log(cart)
	}

	function handleSubmit(e) {
		Event.preventDefault()
		console.log(e.target.value)
	}


	return (
		<div className={shopCSS.card}>
			<h2>{product.title}</h2>
			<img src={product.image} alt={"placeholder text"} />
			<details>{product.description}</details>
			<h3>Price: ${product.price}</h3>
			<div>
			<label htmlFor="">Quantity: </label>
			<input type="number" min="1" defaultValue="1" className={shopCSS.amountInput} onChange={e => setAmount(Number(e.target.value))}/>
			<button onClick={() => addToCart(product)} >Add to Cart </button>
			</div>
		</div>
		)
}