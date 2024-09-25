
import {React} from 'react'
import ItemList from './ItemList'
import styles from './shop.module.css'

export default function Shop() {
  return (
      <div className={styles.shopListContainer}>
            <h2>Welcome to the store!</h2>
            <ItemList/>
        </div>
    );
}



