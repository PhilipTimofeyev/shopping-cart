import { useContext } from 'react';
import { CartContext } from '../App';
import Item from './Item'

export default function Cart() {
    const { cart, setCart } = useContext(CartContext)

    function cartTotal() {
        const total = Object.values(cart).reduce((acc, product) => {
            const totalItemCost = product.item.price * product.amount;
            console.log(product)
            return acc + totalItemCost
        }, 0)

        return total
    }

    function cartSize() {
        return Object.keys(cart).length
    }

    return (
        <>
            <p>Cart Total: {cartTotal()}</p>
            <div>{
            cartSize() > 0 && Object.entries(cart).map(([id, product]) => {
                return <div key={id}><Item product={product.item} /></div>
            })
            }</div>
        </>
    )
}