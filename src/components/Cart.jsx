import { useContext } from 'react';
import { CartContext } from '../App';
import Item from './Item'

export default function Cart() {
    const { cart, setCart } = useContext(CartContext)

    function showCart() {
        cart.map((item) => {
            return <p>Yay</p>
        })
    }

    function cartTotal() {
        let total = cart.reduce((acc, item) =>
            acc + item.price,
        0
        )

        return total.toFixed(2)
    }

    return (
        <>
            <p>Cart Total: {cartTotal()}</p>
            <div>{
            cart.map((item) => {
                console.log(item)
                return <div key={item.id}><Item product={item} /></div>
            })
            }</div>
        </>
    )
}