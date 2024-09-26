
import {React} from 'react'
import ItemList from './ItemList'
import styles from './shop.module.css'

export default function Shop() {
  return (
      <div className={styles.shopListContainer}>
            <h2>Products</h2>
            <ItemList/>
        </div>
    );
}



