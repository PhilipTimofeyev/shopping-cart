import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import navbar from './navbar.module.css'
// import Cart from '../Cart'
import { useContext } from 'react';
import { CartContext } from '../../App';

const Navbar = () => {
    const {cart, setCart} = useContext(CartContext)
    
    return (
        <div className={navbar.container}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart {cart.length}</Link>
            </div>
        </div>
    )

}

export default Navbar;
