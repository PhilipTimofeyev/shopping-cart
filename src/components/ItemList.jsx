import { React, useEffect, useState, useRef } from 'react'
import Item from './Item'
import styles from './shop.module.css'

export default function ItemList () {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [showPopup, setShowPopup] = useState(false);
	let productRef = useRef(null)

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
				productRef.current = jsonData

			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false)
			}
		};
		dataFetch()
	}, [])

	function handleChange(e) {
		const searchQuery = e.target.value
		const newProductList = productRef.current.filter((product) => {
			console.log(searchQuery)
			return product.title.includes(searchQuery)
		})
		setProducts(newProductList)
	}

	return (
		<>
			{showPopup && <h2>Added to Cart!</h2>}
			{isLoading && <h2>Loading...</h2>}
			<div className={styles.search}>
				<label>Search Products:</label>
				<input type="search" onChange={handleChange}></input>
			</div>
			{error && <h2 style={{ color: "red" }}>Error: {error.message}</h2>}
			<div className={styles.cardsContainer}>
				{products.map(product => (
					<div key={product.id}>{<Item product={product} setShowPopup={setShowPopup}/>}</div>
				))
				}
			</div>
		</>
		)
}
