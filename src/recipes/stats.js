import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateRecipeThunk} from "./recipes-thunks";
import {addToCookbookThunk} from "../cookbook/cookbook-thunks";

const Stats = ({recipe}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();

    console.log(recipe)
    console.log("stats rid " + recipe._id);
    console.log("stats rid " + recipe._id);
    return(
        <div>
            <p>
                {/*TODO: Make a liked call here to relationship table and display icon differently. */}
                <i className="bi bi-heart pe-2 fs-5 pb-3"
                   onClick = {() => dispatch(updateRecipeThunk({
                       ...recipe,
                       likes: recipe.likes + 1
                   }))}>

                </i>
            </p>

            {/*TODO: Make a liked call here to relationship table and display differently. */}
            <i className="bi bi-book fs-5"
               onClick = {() => dispatch(addToCookbookThunk(recipe._id))}>
            </i>

        </div>
    );
};
export default Stats;