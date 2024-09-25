import React from 'react'
import shopCSS from './shop.module.css'

export default function Item ({product}) {


	return (
		<div className={shopCSS.card}>
			<p>{product.title}</p>
			<img src={product.image} alt={"placeholder text"} />
			<label htmlFor="">Amount: </label>
			<input type="number" className={shopCSS.amountInput}/>
			<button>Add to Cart </button>
		</div>
		)
}