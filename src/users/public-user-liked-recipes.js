import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {getCookBookForUserThunk} from "../cookbook/cookbook-thunks";
import {useParams} from "react-router";
import {findAllLikedRecipesForUserThunk} from "../recipes/recipes-thunks";

const PublicUserLikedRecipes = () => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const {recipes} = useSelector((state) => state.recipes)
    useEffect(() => {
        dispatch(findAllLikedRecipesForUserThunk(uid))
    }, [])

    return(
        <>
            {
                recipes.length !== 0
                &&
                recipes
                    .filter(item => item.likedRecipe != null)
                    .map(item =>
                        <MinifiedRecipeItem key={item.likedRecipe._id} recipe={item.likedRecipe}/>)

            }
        </>
    );
}

export default PublicUserLikedRecipes;