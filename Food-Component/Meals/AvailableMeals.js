import React from "react";
import availableMealstyle from './AvailableMeals.module.css'
import Card from "../Food-UI/Card";
import Mealitems from "./MealItem/mealitems";

const DUMMY_MEALS = [{
    id: 'm0',
    name: 'Suhjkshi',
    description: 'Finest fish and Veggies',
    price: 22.35
},
{
    id: 'm1',
    name: 'Suuhyjgshi',
    description: 'Finest fish and Veggies',
    price: 229.35
},
{
    id: 'm2',
    name: 'Suhgjshi',
    description: 'Finest fish and Veggies',
    price: 222.35
},
{
    id: 'm3',
    name: 'Sushi',
    description: 'Finest fish and Veggies',
    price: 262.35
},
{
    id: 'm4',
    name: 'Sushi',
    description: 'Finest fish and Veggies',
    price: 42.35
}

]
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <Mealitems
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />

    ))
       
    return (
        <section className={availableMealstyle.meals}>

            <Card>
                <ul>
                    {mealsList}
                </ul>

            </Card>

        </section>

    )
}
export default AvailableMeals;