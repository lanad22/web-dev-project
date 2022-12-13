import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findResultByIdThunk} from "./search-thunks";
import {createRecipeThunk} from "../recipes/recipes-thunks";
import RecipeList from "../recipes/RecipeList";

const Meal = () => {
    const {id} = useParams();
    const {detail} = useSelector((state) => state.results)
    const {recipes} = useSelector((state) => state.recipes)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const newRecipeTitle = 'new recipe'
    const newRecipeStep = []
    const newRecipeId = '123'
    const newRecipe = {newRecipeTitle, newRecipeStep, newRecipeId}

    useEffect(() => {
        dispatch(findResultByIdThunk(id))
    }, [id]);

    const handleCreateRecipeBtn = () => {
        dispatch(createRecipeThunk({
            newRecipe
        }))
    }
    console.log(currentUser)
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

            <div>
                <h4>Recipes for {detail.title}</h4>
                {

                    currentUser &&
                    <button onClick={handleCreateRecipeBtn}>Create a new recipe</button>
                }

                <RecipeList/>
            </div>



        </div>

    );
};
export default Meal
