import React from "react";
import RecipeList from "../recipes/RecipeList";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    return (
        <>
            <div>
                {
                    currentUser &&
                    <h2>Welcome {currentUser.firstname}</h2>
                }

                <RecipeList/>
            </div>
        </>
    );
};
export default HomeComponent;
