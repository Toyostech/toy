import React,{Fragment} from "react";
import mealsstyle from './Meals.module.css'
import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
    return <Fragment>
        <MealSummary />
        <AvailableMeals />

    </Fragment>
}
export default Meals; 