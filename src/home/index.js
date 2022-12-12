import React from "react";
import StartAPost from "./start-a-post";
import RecipeList from "../recipes/RecipeList";

const HomeComponent = () => {
    return(
        <>
            <div>
                <StartAPost/>
                <RecipeList/>
            </div>
        </>
    );
};
export default HomeComponent;
