
import {React, useEffect, useState} from 'react'
import ItemList from './ItemList'
import shopCSS from './shop.module.css'

export default function Shop() {
  return (
        <div className={shopCSS.shopListContainer}>
            <p>Welcome to the store!</p>
            <ItemList/>
        </div>
    );
}



