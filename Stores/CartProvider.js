import React, {useReducer} from "react";
import Cartontext from "./Cart-Context";

const DefaultCartState = {
    items: [],
    totalAmount: 0
}
const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        
        const UpdatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        
       
        let UpdatedItems; 
        if (existingCartItem) {
            
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            UpdatedItems = [...state.items];
            UpdatedItems[existingCartItemIndex] = updatedItem; 
             

        }
        else {
            
            UpdatedItems = state.items.concat(action.item);
        }
       
         
        return {
            items: UpdatedItems,
            totalAmount: UpdatedTotalAmount
        };

         
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id); 


        const existingItem = state.items[existingCartItemIndex]


        const UpdatedTotalAmount = state.totalAmount - existingItem.price

        let UpdatedItems;
        if (existingItem.amount === 1) { 
            UpdatedItems = state.items.filter(item => item.id !== action.id)


        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            
            UpdatedItems = [...state.items];
            UpdatedItems[existingCartItemIndex] = updatedItem
        } 

        return {
            items: UpdatedItems,
            totalAmount: UpdatedTotalAmount
        }
         



    }


    return DefaultCartState

}

const Cartprovider = (props) => {
    const [CartState, dispatchCartAction] = useReducer(CartReducer, DefaultCartState)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item})
    }
    
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })

    }



    const CartContext =
    {
        items: CartState.items,
        totalAmount: CartState.totalAmount,
        addItems: addItemToCartHandler,
        removeItem: removeItemFromCartHandler 
    };


    return (
        <Cartontext.Provider value ={CartContext}>
            {props.children}
        </Cartontext.Provider>
    )
    
}
export default Cartprovider; 