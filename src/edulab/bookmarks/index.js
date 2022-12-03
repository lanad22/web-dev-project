import React from "react";
import "./index.css";
import BookmarkItem from "./BookmarkItem";

const BookmarkComponent = () => {
    const postsArray = [
        {
            _id : 1,
            displayPicture: "../images/owl.jpeg",
            title: "This is the title",
            content: "This is the content. everyone should learn web devThis is the content. everyone should learn web dev" +
                "This is the content. everyone should learn web dev" +
                "This is the content. everyone should learn web dev",
            datePosted: "Oct 30, 2022",
            name: "Jose Annunzito",
            course: "CS5610"
        }
        ,
        {
            _id : 2,
            displayPicture: "../images/owl.jpeg",
            title: "This is the title",
            content: "This is the content. everyone should learn web devThis is the content. everyone should learn web dev" +
                "This is the content. everyone should learn web dev" +
                "This is the content. everyone should learn web dev",
            datePosted: "Oct 30, 2022",
            name: "Jose Annunzito",
            course: "CS5610"
        }
        ,
        {
            _id : 3,
            displayPicture: "../images/owl.jpeg",
            title: "This is the title",
            content: "This is the content. everyone should learn web devThis is the content. everyone should learn web dev" +
                "This is the content. everyone should learn web dev" +
                "This is the content. everyone should learn web dev",
            datePosted: "Oct 30, 2022",
            name: "Jose Annunzito",
            course: "CS5610"
        }
    ]
    return(
        <>
            {
                postsArray.map(post =>
                    <BookmarkItem
                        key={post._id} post={post}/> )
            }
        </>
    );
};
export default BookmarkComponent;