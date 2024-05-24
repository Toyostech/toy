import React, { useContext } from "react";
import mealitemstyle from './Mealitems.module.css'
import MealitemForm from "./MealitemForm";
import CartContext from "../../../Stores/Cart-Context";


const Mealitems = (props) => {

    const CartCtx = useContext(CartContext);


    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        CartCtx.addItems({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });

    };


    return <li className={mealitemstyle.meal}>
        <div>
            <h3>
                {props.name}
            </h3>

            <div className={mealitemstyle.description}>{props.description}
            </div>
            <div className={mealitemstyle.price}>{price}</div>


        </div>
        <div>
            <MealitemForm onAddToCart={addToCartHandler} />

        </div>
    </li>
};
export default Mealitems