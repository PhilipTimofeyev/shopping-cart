import { React, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from '../Shop/shop.module.css'
import { CartContext } from '../../App';

export default function Item({ product, setShowPopup }) {
	const {cart, setCart} = useContext(CartContext)
	const [amount, setAmount] = useState(1)

	function addToCart (item) {
		if (item.id in cart) {
			const currentAmount = cart[item.id].amount
			setCart({ ...cart, [item.id]: { item: item, amount: amount + currentAmount } })
		} else {
			setCart({ ...cart, [item.id]: { item: item, amount: amount } })
		}
		setShowPopup(true)

		setTimeout(() => {
			setShowPopup(false);
		}, 1500);
	}

	return (
		<div className={styles.card}>
			<h2>{product.title}</h2>
			<img src={product.image} alt={"placeholder text"} />
			<details>{product.description}</details>
			<h3>Price: ${product.price}</h3>
			<div className={styles.addCart}>
				<div>
					<label htmlFor="">Quantity: </label>
					<input type="number" min="1" defaultValue="1" className={styles.amountInput} onChange={e => setAmount(Number(e.target.value))}/>
				</div>
				<button className={styles.addCartBtn} onClick={() => addToCart(product)} >Add to Cart </button>

			</div>
		</div>
		)
}

Item.propTypes = {
	product: PropTypes.object,
	setShowPopup: PropTypes.func
};