import { React, useEffect, useState } from 'react'
import Item from './Item'
import styles from './shop.module.css'

export default function ItemList () {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const dataFetch = async () => {
			setIsLoading(true)
			
			try {
				const response = await fetch('https://fakestoreapi.com/products')
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const jsonData = await response.json();
				setProducts(jsonData);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false)
			}
		};
		dataFetch()
	}, [])

	return (
		<>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2 style={{ color: "red" }}>Error: {error.message}</h2>}
			<div className={styles.cardsContainer}>
				{products.map(product => (
					<div key = {product.id}>{<Item product={product}/>}</div>
				))
				}
			</div>
		</>
		)
}
