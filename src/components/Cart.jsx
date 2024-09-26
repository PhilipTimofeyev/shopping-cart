import { useContext } from 'react';
import { CartContext } from '../App';
import CartItem from './cart/CartItem'

export default function Cart() {
    const { cart, setCart } = useContext(CartContext)

    function cartTotal() {
        const total = Object.values(cart).reduce((acc, product) => {
            const totalItemCost = product.item.price * product.amount;
            console.log(product)
            return acc + totalItemCost
        }, 0)

        return total.toFixed(2)
    }

    function cartSize() {
        return Object.keys(cart).length
    }

    return (
        <>  
            {!cartSize() && <h2>Cart is empty!</h2>}
            <div>{
                cartSize() > 0 && Object.entries(cart).map(([id, product]) => {
                    return <div key={id}><CartItem product={product.item} amount={product.amount} /></div>
                })
            }</div>
            {cartSize() > 0 && <h2>Cart Total: ${cartTotal()}</h2>}
        </>
    )
}