import React from "react"
import "./index.css"

const BookmarkItem = (
    {
        post
    }
    ) => {
    return(
        <div className="wd-bookmarked-post mb-4">
            <div className="wd-post-content ps-1">
                <div className="wd-user-info">
                    <img className="float-start wd-profile-pic" src={post.displayPicture} width="48px" height="48px"/>
                    <div className="pt-2">
                        <p className="ms-2 float-start wd-bold">{post.name}</p>
                        <p className="ms-2 float-start fw-bold ">{post.course}</p>
                        <p className="ms-2 float-start wd-grey"> - {post.datePosted}</p>
                    </div>
                    <div className="wd-float-done"></div>

                </div>

                <div className= "mt-3 fw-bold">
                    {post.title}
                </div>

                <div className="mt-3">
                    <div className="pb-2">
                        {post.content}
                    </div>
                    <a href="#">Show more</a>
                </div>

            </div>

            <div className="wd-float-done"></div>
        </div>
    );
};
export default BookmarkItem;
