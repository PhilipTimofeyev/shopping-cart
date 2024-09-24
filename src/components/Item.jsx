import React from 'react'
import shopCSS from './shop.module.css'

export default function Item (prop) {


	return (
		<div className={shopCSS.card}>
			<p>I'm an Item</p>
			<label htmlFor="">Amount: </label>
			<input type="number" className={shopCSS.amountInput}/>
			<button>Add to Cart </button>
		</div>
		)
}