import React from 'react'
import styles from './Cart.module.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../App';

export default function CartItem({ product, amount }) {
    const { cart, setCart } = useContext(CartContext)

    function handleClick() {
        const newCart = {...cart}
        delete newCart[product.id]

        setCart(newCart)
    }

    return (
        <div className={styles.cartCard}>
            <div>
                <img src={product.image} alt={"placeholder text"} />
                <h3>{product.title}</h3>
            </div>
            
            <div>
                <h3>Quantity: {amount}</h3>
                <h3>Price: ${product.price}</h3>
                <button onClick={handleClick}>Remove</button>
            </div>
        </div>
    )
}