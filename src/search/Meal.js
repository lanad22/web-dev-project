import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findResultByIdThunk} from "./search-thunks";
import {createRecipeThunk} from "../recipes/recipes-thunks";

const Meal = () => {
    const {id} = useParams();
    const {detail} = useSelector((state) => state.results)
    const {recipes} = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    const [newRecipe, setNewRecipe] = useState('')

    useEffect(() => {
        dispatch(findResultByIdThunk(id))
    }, [id]);

    const handleCreateRecipeBtn = () => {
        dispatch(createRecipeThunk({
            newRecipe,
            id
        }))
    }

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
                <input
                    onChange={(e) => setNewRecipe(e.target.value)}
                    className = 'form-control'
                ></input>
                <button onClick={handleCreateRecipeBtn}>Create a new recipe</button>
            </div>



        </div>

    );
};
export default Meal
