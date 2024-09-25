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

    return (
        <>
            <span>We made it! {
            cart.map((item) => {
                console.log(item.title)
                return <div key={item.id}><Item product={item} /></div>
            })
            }</span>
        </>
    )
}