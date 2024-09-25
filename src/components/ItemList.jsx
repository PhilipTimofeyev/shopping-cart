import { React, useEffect, useState } from 'react'
import Item from './Item'

export default function ItemList () {

	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(response => setProducts(response))
	}, [])

	return (
		<>
		<h3>List of Items</h3>
			{/* <Item/> */}
			{products.map(product => (
				<div key = {product.id}>{<Item product={product}/>}</div>
			))
			}
		</>
		)
}


const Products = () => {

	// useEffect(() => {
	// 	fetch('https://fakestoreapi.com/products')
	// 		.then(res => res.json())
	// 		.then(setProducts(json))
	// }, [])
}