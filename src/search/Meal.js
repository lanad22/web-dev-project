import React, { useEffect } from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findAllRecipesThunk} from "../recipes/recipes-thunks";
import {Link} from "react-router-dom";
import {findResultByIdThunk} from "./search-thunks";

const Meal = () => {
    const {query, id} = useParams();
    const {detail} = useSelector((state) => state.results)
    const {recipes} = useSelector((state) => state.recipes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findResultByIdThunk(id))
        dispatch(findAllRecipesThunk())
    }, [id]);

    const results = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(query.toLowerCase())
    })
    return (
        <div className = 'p-3'>
            <div className = 'card w-50 m-auto'>
                <img
                    src = {detail.image}
                    className='card-img' alt="recipe"
                />
                <h5 className='text-capitalize p-2'>{detail.title}</h5>
                <ul>
                    <li>
                        Ready in {detail.readyInMinutes} minutes
                    </li>
                    <li>
                        PUBLISHER: {detail.sourceName}
                    </li>
                    <li>
                        WEBSITE: <a href={detail.sourceUrl}>{detail.sourceUrl}</a>
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
