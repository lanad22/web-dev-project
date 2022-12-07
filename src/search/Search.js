import React, { useState } from "react";
import MealList from "./MealList";

const Search = () => {
    const [mealData, setMealData] = useState(null);
    const [query, setQueries] = useState(null);

    const getMealData = () => {
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
    }

    const handleChange = (e) => {
        setQueries(e.target.value);
    }

    return (
        <div>
                <div className = 'input-group ms-auto me-auto ps-1 w-25' >
                    <input
                        placeholder="Search"
                        className="ps-2 mt-3 form-control"
                        onChange={handleChange}
                    />
                    <div className = 'input-group-append mt-3'>
                        <button onClick={getMealData} className='btn btn-secondary position-absolute'>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            <div className = 'row'>
                {mealData && <MealList mealData={mealData} />}
            </div>

        </div>
    );
}

export default Search;
