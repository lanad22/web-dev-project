import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router";

const MealList = () => {
    const {query} = useParams();
    const [mealData, setMealData] = useState();

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=3857cfd46a694bcba671969e6bf77753&query=${query}&number=6`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            });
    },[query])
    return (
        <div>
            <div className = 'pt-3 text-center'>
                <h4>Results</h4>
            </div>
            <div className = 'row'>
            {mealData && mealData.results.map((meal) => {
                return (
                    <div key = {meal.title} className = 'p-4 col-4'>
                        <div className ='card'>
                            <img
                                src={meal.image}
                                className='card-img' alt="recipe"
                            />
                            <h5 className = 'p-3 text-capitalize'>{meal.title}</h5>
                            <button>
                                <Link to={{
                                    pathname: `/meal/${meal.id}`}}>View Detail</Link>
                            </button>
                        </div>

                    </div>
                );
            })}
            </div>
        </div>


    );
};
export default MealList
