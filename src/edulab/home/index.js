import React from "react";
import StartAPost from "./start-a-post";
import NavigationComponent from "../navigation";

const HomeComponent = () => {
    return(
        <>
            <div>
                <NavigationComponent/>
                <StartAPost/>
            </div>
        </>
    );
};
export default HomeComponent;
