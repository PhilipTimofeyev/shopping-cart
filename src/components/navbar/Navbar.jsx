import React from 'react';
import { Link } from 'react-router-dom';
import navbar from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={navbar.container}>
            <div>
                <Link to="/shop">Shop</Link>
            </div>
            <div>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )

}

export default Navbar;