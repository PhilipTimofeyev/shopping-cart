
import {React, useEffect, useState} from 'react'
import ItemList from './ItemList'
import shopCSS from './shop.module.css'
import { useContext } from 'react';

export default function Shop() {
    // const [cart, setCart] = useContext(MyContext)
  return (
        <div className={shopCSS.shopListContainer}>
            <p>Welcome to the store!</p>
            <ItemList/>
        </div>
    );
}



