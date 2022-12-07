import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
    const nutrients = mealData.nutrients;
    console.log(nutrients);

    return (
        <main>
            <section className="nutrients">
                <h1>Results</h1>
                <ul>
                </ul>
            </section>

            <section className="meals">
                {mealData.results.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </section>
        </main>
    );
}
