import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {getCookBookForUserThunk} from "../cookbook/cookbook-thunks";
import {findAllCommentedRecipesForUserThunk} from "../recipes/recipes-thunks";

const UserCommentedRecipes = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users)
    const {recipes} = useSelector((state) => state.recipes)
    useEffect(() => {
        dispatch(findAllCommentedRecipesForUserThunk(currentUser._id))
    }, [])
    console.log(recipes)

    return(
        <>
            {
                recipes.length !== 0
                &&
                recipes
                    .filter(item => item.recipe != null)
                    .map(item =>
                        <MinifiedRecipeItem key={item.recipe._id} recipe={item.recipe}/>)

            }
        </>
    );
}

export default UserCommentedRecipes;