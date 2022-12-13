import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MinifiedRecipeItem from "./MinifiedRecipeItem";
import {findAllRecipesThunk} from "./recipes-thunks";

const RecipeList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('dispatch')
        dispatch(findAllRecipesThunk())
    }, [])
    const {recipes} = useSelector((state) => state.recipes)
    const slicedRecipes = recipes.slice(0,5);
    return(
        <>
            <ul className = 'p-5 list-group'>
                {
                    slicedRecipes.map(recipe =>
                        <MinifiedRecipeItem key={recipe._id} recipe={recipe} />)
                }
            </ul>
        </>
    )
};
export default RecipeList;