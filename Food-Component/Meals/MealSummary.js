import React from "react";
import mealsummarystyle from './MealSummary.module.css'

const MealSummary = () => {
    return <section className={mealsummarystyle.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>choose your favorite meal from our</p>
        <p>All our meals are with high-quality ingrident </p>
    </section>
}
export default MealSummary;