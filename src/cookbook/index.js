import React, {useEffect} from "react";
import "./index.css";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {useDispatch, useSelector} from "react-redux";
import {getCookBookForUserThunk} from "./cookbook-thunks";

const BookmarkComponent = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users)
    const {cookbook} = useSelector((state) => state.cookbook)
    useEffect(() => {
        dispatch(getCookBookForUserThunk(currentUser._id))
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