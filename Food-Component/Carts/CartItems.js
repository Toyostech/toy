import React from 'react'
import cartItems_style from './CartItems.module.css'


const CartItems = (props) => {
    const price = `$ ${props.price}`;


    return (
        <li className={cartItems_style['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={cartItems_style.summary}>
                    <span className={cartItems_style.price}>{price}</span>
                    <span className={cartItems_style.amount}>x{props.amount}</span>
                </div>

            </div>
            <div className={cartItems_style.action}>
                <button onClick={props.onRemove}>-</button>
                <button onClick ={props.onAdd}>+</button>

            </div>
        </li>
    )

};
export default CartItems