import React, { useState } from "react";
import MealList from "./MealList";

function Search() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function getMealData() {
        fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=3857cfd46a694bcba671969e6bf77753&query=${calories}&number=3`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            });
    }

    function handleChange(e) {
        setCalories(e.target.value);
    }

    return (
        <div>
            <div className = 'ps-1 position-relative'>
                <input
                    placeholder="Search a recipe (e.g. Chicken Fried Rice)"
                    className="ps-5 mt-3 form-control rounded"
                    onChange={handleChange}
                />
                <i className="bi bi-search wd-nudge-up position-relative"></i>
                <button onClick={getMealData} className='btn btn-primary'>Search</button>
            </div>
            {mealData && <MealList mealData={mealData} />}
        </div>
    );
}

export default Search;
