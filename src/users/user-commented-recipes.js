import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {getCookBookForUserThunk} from "../cookbook/cookbook-thunks";

const UserCommentedRecipes = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users)
    const {cookbook} = useSelector((state) => state.cookbook)
    useEffect(() => {
        dispatch(getCookBookForUserThunk(currentUser._id)) //TODO: replace with commented recipies thunk call
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