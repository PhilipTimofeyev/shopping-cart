import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
import { useContext } from 'react';
import { CartContext } from '../../App';

const Navbar = () => {
    const {cart, setCart} = useContext(CartContext)

    function cartQuantity() {
        return Object.keys(cart).length
    }
    
    return (
        <div className={styles.navContainer}>
            <h1>Odin's Warehouse</h1>
            <div className={styles.linksContainer}>
                <Link to="/"><button className={styles.navButtons}>Home</button></Link>
                <Link to="/shop"><button className={styles.navButtons}>Shop</button></Link>
                <Link to="/cart"><button className={styles.navButtons}>Cart ({cartQuantity()})</button></Link>
            </div>
        </div>
    )

}

export default Navbar;
