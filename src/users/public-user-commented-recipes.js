import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {getCookBookForUserThunk} from "../cookbook/cookbook-thunks";
import {useParams} from "react-router";
import {findAllCommentedRecipesForUserThunk} from "../recipes/recipes-thunks";

const UserCommentedRecipes = () => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const {commentedRecipeUser} = useSelector((state) => state.recipes)
    useEffect(() => {
        dispatch(findAllCommentedRecipesForUserThunk(uid))
    }, [])
    //console.log(recipes)
    return(
        <>
            {
                commentedRecipeUser.length !== 0
                &&
                commentedRecipeUser
                    .filter(item => item.recipe != null)
                    .map(item =>
                        <MinifiedRecipeItem key={item.recipe._id} recipe={item.recipe}/>)

            }
        </>
    );
}

export default UserCommentedRecipes;