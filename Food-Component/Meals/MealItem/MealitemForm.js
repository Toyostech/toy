import React, {useRef, useState} from "react";
import mealitemformstyle from './MealitemForm.module.css'
import Input from '../../Food-UI/Input'

const MealitemForm = (props) => {
    const [amountIsValid, SetAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const EnteredAmount = amountInputRef.current.value;
        const EnteredAmountNumber = +EnteredAmount

        if (EnteredAmount.trim().length === 0 ||
            EnteredAmount < 1 || EnteredAmountNumber > 5
        ) {
            SetAmountIsValid(false);
            return; 
        }
        props.onAddToCart(EnteredAmountNumber)
           

        
        
       

    }  
    return <form className={mealitemformstyle.form} onSubmit={submitHandler}>

        <Input
            ref= {amountInputRef}
            label="Amount"
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        
        <button>+ Add</button>
        {!amountIsValid && <p></p>}
    </form>
}
export default MealitemForm;