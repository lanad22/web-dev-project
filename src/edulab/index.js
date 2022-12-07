import {Routes, Route} from "react-router";
import NavigationComponent from "../navigation";
import HomeComponent from "../home";
import ProfileComponent from "../profile";
import Ads from "../ads";
import BookmarkComponent from "../bookmarks";
import Search from "../search/Search";
import Meal from "../search/Meal";
import React from "react";


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
                        <Route path="profile" element ={<ProfileComponent/>}/>
                        <Route path="bookmarks" element ={<BookmarkComponent/>}/>
                        <Route path="search" element ={<Search/>}/>
                        <Route path = "meal/:id" element = {<Meal/>}/>
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