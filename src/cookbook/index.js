import React, {useEffect} from "react";
import "./index.css";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {useDispatch, useSelector} from "react-redux";
import {findAllRecipesThunk} from "../recipes/recipes-thunks";

const BookmarkComponent = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllRecipesThunk())
    }, [])

    const {recipes} = useSelector((state) => state.recipes)
    const bookmarkedRecipes = recipes.slice(0,5); //TODO: Replace with real call
    return(
        <>
            {
                bookmarkedRecipes.map(recipe =>
                    <MinifiedRecipeItem
                        key={recipe._id} recipe={recipe}/> )
            }
        </>
    );
};
export default BookmarkComponent;