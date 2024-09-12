import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {getCookBookForUserThunk} from "../cookbook/cookbook-thunks";
import {findAllLikedRecipesForUserThunk} from "../recipes/recipes-thunks";

const UserLikedRecipes = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {likedRecipeUser} = useSelector((state) => state.recipes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllLikedRecipesForUserThunk(currentUser._id))
    }, [])
    return(
        <>
            {
                likedRecipeUser.length !== 0
                &&
                likedRecipeUser
                    .filter(item => item.likedRecipe != null)
                    .map(item =>
                        <MinifiedRecipeItem key={item.likedRecipe._id} recipe={item.likedRecipe}/>)

            }
        </>
    );
}

export default UserLikedRecipes;