import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {getCookBookForUserThunk} from "../cookbook/cookbook-thunks";
import {useParams} from "react-router";

const UserCommentedRecipes = () => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const {cookbook} = useSelector((state) => state.cookbook)
    useEffect(() => {
        dispatch(getCookBookForUserThunk(uid)) //TODO: replace with commented recipies thunk call
    }, [])

    return(
        <>
            {
                cookbook
                    .filter(item => item.bookmarkedRecipe != null)
                    .map(item =>
                        <MinifiedRecipeItem key={item.bookmarkedRecipe._id} recipe={item.bookmarkedRecipe}/>)

            }
        </>
    );
}

export default UserCommentedRecipes;