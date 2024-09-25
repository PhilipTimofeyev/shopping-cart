import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import navbar from './navbar.module.css'
import { useContext } from 'react';
import { CartContext } from '../../App';

const Navbar = () => {
    const {cart, setCart} = useContext(CartContext)
    
    return (
        <div className={navbar.container}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart {<Cart cart={cart}/>}</Link>
            </div>
        </div>
    )

}

export default Navbar;

function Cart ({cart}) {

    return (
        <>
            <span>{cart.length}</span>
        </>
    )
}