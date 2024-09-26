import { React, useEffect, useState } from 'react'
import Item from './Item'
import shopCSS from './shop.module.css'

export default function ItemList () {

	const [products, setProducts] = useState([])

	useEffect(() => {
		const dataFetch = async () => {
			const data = await (
				await fetch(
					'https://fakestoreapi.com/products',
				)
			).json();
			setProducts(data)
		};
		dataFetch()
	}, [])

	return (
		<>
			<div className={shopCSS.cardsContainer}>
			{products.map(product => (
				<div key = {product.id}>{<Item product={product}/>}</div>
			))
			}
			</div>
		</>
		)
}
