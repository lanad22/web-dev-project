import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllRecipesThunk} from "./recipes-thunks";
import {profileThunk} from "../users/user-thunks";

const RecipeList = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {recipes} = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllRecipesThunk())
        dispatch(profileThunk())
    })
    return(
        <>
        <h1>Recipes</h1>
        {
            currentUser &&
            <h2>Welcome</h2>
        }
        <ul className = 'list-group'>
            {
                recipes.map((recipe) =>
                <li classname = 'list-group-item'
                    key={recipe._id}>
                    {recipe.title}
                </li>)
            }
        </ul>
        </>
    )
};
export default RecipeList;