import React, {useEffect} from "react";
import "./index.css";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {useDispatch, useSelector} from "react-redux";
import {getCookBookForUserThunk} from "./cookbook-thunks";
import {useParams} from "react-router";
const BookmarkComponent = () => {
    const {uid} = useParams();
    const dispatch = useDispatch();
    const {cookbook} = useSelector((state) => state.cookbook)
    useEffect(() => {
        dispatch(getCookBookForUserThunk(uid))
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
};
export default BookmarkComponent;