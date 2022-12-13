import React, { useState, useEffect } from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findAllRecipesThunk} from "../recipes/recipes-thunks";
import {Link} from "react-router-dom";

const Meal = () => {
    const {query, id} = useParams();
    console.log(id);
    const [detailData, setDetailData] = useState("");
    const {recipes} = useSelector((state) => state.recipes)
    const dispatch = useDispatch()

    const fetchMeal = () => {
        fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=3857cfd46a694bcba671969e6bf77753&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setDetailData(data);
            })
    }

    useEffect(() => {
        fetchMeal()
        dispatch(findAllRecipesThunk())
    }, [id]);

    const results = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(query.toLowerCase())
    })
    return (
        <div className = 'p-3'>
            <div className = 'card w-50 m-auto'>
                <img
                    src = {detailData.image}
                    className='card-img' alt="recipe"
                />
                <h5 className='text-capitalize p-2'>{detailData.title}</h5>
                <ul>
                    <li>
                        Ready in {detailData.readyInMinutes} minutes
                    </li>
                    <li>
                        PUBLISHER: {detailData.sourceName}
                    </li>
                    <li>
                        WEBSITE: <a href={detailData.sourceUrl}>{detailData.sourceUrl}</a>
                    </li>
                </ul>

            </div>
            <h4>Related Recipes</h4>
            {
                results && results.map((recipe) => (
                    <Link to={{
                        pathname: `/recipes/${recipe._id}`}}>
                    <li>{recipe.title}</li>
                    </Link>
                ))
            }
        </div>

    );
};
export default Meal
