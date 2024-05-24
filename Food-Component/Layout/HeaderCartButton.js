import React,{useContext} from "react";
import HeaderCartButtonstyle from './HeaderCartButton.module.css'
import Cartontext from "../../Stores/Cart-Context";

const HeaderCartButton = (props) => {
    const CartCtx = useContext(Cartontext)
    const NumberOfItems = CartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)
    return <button className={HeaderCartButtonstyle.button} onClick={props.onClick}>
        <span>Your Cart</span>
        <span className={HeaderCartButtonstyle.badge}>{NumberOfItems}</span>

    </button>
}
export default HeaderCartButton;