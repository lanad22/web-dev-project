import React from "react";
import { Link } from "react-router-dom";

const MealList = ({mealData}) => {
    return (
        <div className="mt-3 row">
            {mealData.results.map((meal) => {
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

    );
};
export default MealList
