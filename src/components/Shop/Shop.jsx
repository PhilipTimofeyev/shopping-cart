
import {React} from 'react'
import ItemList from '../Items/ItemList'
import styles from './shop.module.css'

export default function Shop() {
  return (
      <div className={styles.shopListContainer}>
            <ItemList/>
        </div>
    );
}



