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
                    <h2 className = 'pt-4 pb-0 text-center'>
                        <i className="fa-light fa-hand-wave pe-2"></i>
                        Hello {currentUser.firstname}
                    </h2>
                }

                <RecipeList/>
            </div>
        </>
    );
};
export default HomeComponent;
