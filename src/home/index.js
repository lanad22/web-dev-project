import React, {useEffect} from "react";
import RecipeList from "../recipes/RecipeList";
import StartAPost from "./start-a-post";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../users/user-thunks";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    })
    return (
        <>
            <div>
                {
                    currentUser &&
                    <h2>Welcome {currentUser.firstname}</h2>
                }
                {
                    currentUser &&
                    currentUser.userType === 'chef' &&
                    <StartAPost/>

                }

                <RecipeList/>
            </div>
        </>
    );
};
export default HomeComponent;
