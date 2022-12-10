import {Routes, Route} from "react-router";
import NavigationComponent from "../navigation";
import HomeComponent from "../home";
import Ads from "../ads";
import BookmarkComponent from "../bookmarks";
import Meal from "../search/Meal";
import MealList from "../search/MealList";
import React from "react";
import Register from "../users/register";
import Login from "../users/login";
import Profile from "../users/profile";


function EduLab(){
    return(
        <div className="container">
            <div className = 'row bg-white p-0'>
                <NavigationComponent/>
            </div>
            <div className = 'mt-2 row'>
                <div className = 'col-9 border border-light p-0'>
                    <Routes>
                        <Route index
                               element={<HomeComponent/>}/>
                        <Route path="bookmarks" element ={<BookmarkComponent/>}/>
                        <Route path="search/:query" element = {<MealList/>}/>
                        <Route path="meal/:id" element = {<Meal/>}/>
                        <Route path="register" element = {<Register/>}/>
                        <Route path="login" element = {<Login/>}/>
                        <Route path="profile" element = {<Profile/>}/>
                    </Routes>
                </div>
                <div className = 'col-3'>
                    <Ads/>
                </div>
            </div>
        </div>
    );
}
export default EduLab