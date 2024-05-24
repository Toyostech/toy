import React, { useContext } from 'react';
import cartsstyle from './Carts.module.css'
import Modal from '../Food-UI/Modal';
import CartContext from '../../Stores/Cart-Context';
import CartItems from './CartItems';


const Carts = (props) => {
    const CartCtx = useContext(CartContext)
    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`
    const hasItems = CartCtx.items.length > 0;

    const cartItemsRemoveHandler = (id) => {
        CartCtx.removeItems({item: id})
    }
    const cartItemsAddHandler = (item) => {
        CartCtx.addItems({...item, amount: 1})
    }
    const cartitems = <ul className={cartsstyle['cart-item']}>{CartCtx.items.map((item) => (
        <CartItems
            key={item.id}
            amount={item.amount}
            name={item.name}
            price={item.price}
            onRemove={cartItemsRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemsAddHandler.bind(null, item)}
        />
    ))}
    </ul>;
    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={cartsstyle.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>


            </div>
            <div className={cartsstyle.actions}>
                <button className={cartsstyle['button--all']} onClick={props.onClose} >Close</button>
                {hasItems && <button className={cartsstyle.button}>Order</button>}
            </div>

        </Modal>

    )

}
export default Carts; 