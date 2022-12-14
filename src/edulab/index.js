import {Routes, Route} from "react-router";
import NavigationComponent from "../navigation";
import HomeComponent from "../home";
import Ads from "../ads";
import Meal from "../search/Meal";
import MealList from "../search/MealList";
import React from "react";
import Register from "../users/register";
import Login from "../users/login";
import Profile from "../users/profile";
import EditProfile from "../users/edit-profile";
import ProtectedRoute from "../users/ProtectedRoute";
import RecipeItem from "../recipes/RecipeItem";
import Cookbook from "../cookbook";
import PublicProfile from "../users/public-profile";
import UserLikedRecipes from "../users/user-liked-recipes";
import UserCommentedRecipes from "../users/user-commented-recipes";
import PublicUserLikedRecipes from "../users/public-user-liked-recipes";
import PublicUserCommentedRecipes from "../users/public-user-commented-recipes";
import PublicCookbook from "../cookbook/public-cookbook";
import Upload from "../ingredients/upload";
import CreateNewRecipe from "../CreateNewRecipe";
import CurrentUser from "../users/current-user";
import './index.css';

function EduLab(){
    return(
        <div className="container">
            <div className = 'row bg-white p-0'>
                <NavigationComponent/>
            </div>
            <div className = 'mt-2 pe-2 row'>
                <div className = 'col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 border border-light override-bs p-2 rounded'>

                        <Routes>
                        <Route index
                               element={<HomeComponent/>}/>
                        <Route path="recipes/:id" element = {
                            <CurrentUser>
                                <RecipeItem/>
                            </CurrentUser>
                        }/>
                        <Route path="search/:query" element = {<MealList/>}/>
                        <Route path="search/:query/details/:id" element = {<Meal/>}/>
                        <Route path="search/:query/details/:dishId/create-new-recipe" element = {<CreateNewRecipe/>}/>
                        <Route path="register" element = {<Register/>}/>
                        <Route path="login" element = {<Login/>}/>
                        <Route path="profile/liked/" element = {<ProtectedRoute>
                            <UserLikedRecipes/>
                            </ProtectedRoute>}/>
                        <Route path="profile/commented/" element = {<ProtectedRoute> <UserCommentedRecipes/></ProtectedRoute>} />
                        <Route path="profile/:uid" element = { <PublicProfile/>} />
                        <Route path="profile/liked/:uid" element = { <PublicUserLikedRecipes/>} />
                        <Route path="profile/commented/:uid" element = { <PublicUserCommentedRecipes/>} />
                        <Route path="cookbook/:uid" element = { <PublicCookbook/>} />
                        <Route path="profile" element = {
                            <ProtectedRoute>
                                <Profile/>
                            </ProtectedRoute>}/>
                        <Route path="cookbook" element = {
                            <ProtectedRoute>
                                <Cookbook/>
                            </ProtectedRoute>}/>
                        <Route path="editprofile" element = {
                            <ProtectedRoute>
                                <EditProfile/>
                            </ProtectedRoute>}/>
                        <Route path="ingredient-upload" element = {
                            <ProtectedRoute>
                                <Upload/>
                            </ProtectedRoute>}/>
                    </Routes>
                </div>
                <div className = 'col-sm-none col-md-none col-lg-4 col-xl-4 col-xxl-4'>
                    <Ads/>
                </div>
            </div>
        </div>
    );
}
export default EduLab