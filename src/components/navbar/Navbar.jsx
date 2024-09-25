import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
// import Cart from '../Cart'
import { useContext } from 'react';
import { CartContext } from '../../App';

const Navbar = () => {
    const {cart, setCart} = useContext(CartContext)
    
    return (
        <div className={styles.container}>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/shop">Shop</Link></button>
            <button><Link to="/cart">Cart ({Object.keys(cart).length})</Link></button>
        </div>
    )

}

export default Navbar;
