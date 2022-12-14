import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {getCookBookForUserThunk} from "../cookbook/cookbook-thunks";

const UserLikedRecipes = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {cookbook} = useSelector((state) => state.cookbook)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCookBookForUserThunk(currentUser._id)) //TODO: replace with liked recipies thunk call
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

export default UserLikedRecipes;