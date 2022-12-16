import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {
    addCommentThunk,
    bookmarkRecipeThunk, deleteRecipeThunk,
    dislikeRecipeThunk, findCommentsForRecipeThunk,
    findRecipeByIdThunk, isRecipeBookmarkedByUserThunk,
    isRecipeLikedByUserThunk,
    likeRecipeThunk, unbookmarkRecipeThunk,
    updateRecipeThunk
} from "./recipes-thunks";
import {Link, useNavigate} from "react-router-dom";

const RecipeItem = () => {
    const {id} = useParams();
    const [cmt, setCmt] = useState('');
    const dispatch = useDispatch();
    const {searchedRecipe} = useSelector((state) => state.recipes)
    const {currentUser} = useSelector((state) => state.users)
    const {comments} = useSelector((state) => state.recipes)
    let totalCalories = 0;
    if(searchedRecipe.ingredients != undefined)
        searchedRecipe.ingredients.forEach((e) => (totalCalories = totalCalories + parseInt(e.calories)))

    let item = null;
    if(currentUser !== null) {
        item = {rid: searchedRecipe._id, uid:currentUser._id}
    }
    const {isLiked} = useSelector((state) => state.recipes)
    const {isBookmarked} = useSelector((state) => state.recipes)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(isRecipeLikedByUserThunk(item))
        dispatch(isRecipeBookmarkedByUserThunk(item))
        dispatch(findRecipeByIdThunk(id))
        item != null &&dispatch(findCommentsForRecipeThunk(item.rid))
    },[id,searchedRecipe.numberOfLikes, isLiked, isBookmarked, comments.length])

    const deleteRecipeHandler = (id) => {
        dispatch(deleteRecipeThunk(id))
        navigate('/')
    }

    const likeButtonHandler = () => {
        dispatch(updateRecipeThunk({
            ...searchedRecipe,
            numberOfLikes: searchedRecipe.numberOfLikes + 1
        }))
        dispatch(likeRecipeThunk(item))
    }

    const bookmarkButtonHandler = () => {dispatch(bookmarkRecipeThunk(item))}

    const unbookmarkButtonHandler = () => {dispatch(unbookmarkRecipeThunk(item))}

    const handleCommentButton = () => {
        const commentBody = {
            recipe: searchedRecipe._id,
            comment: cmt,
            postedBy: item.uid
        }
        dispatch(addCommentThunk(commentBody))
        setCmt('')
    }

    const disLikeButtonHandler = () => {
        dispatch(updateRecipeThunk({
            ...searchedRecipe,
            numberOfLikes: searchedRecipe.numberOfLikes - 1
        }))
        dispatch(dislikeRecipeThunk(item))
    }

    return (
        <div className='list-group-item'>
            <div className='row'>
                <div className="float-start col-auto">
                    {
                        searchedRecipe.chef &&
                        <Link to={`/profile/${searchedRecipe.chef._id}`}>
                            <img width={50}
                                 alt='...' className="float-end rounded-circle"
                                 src={searchedRecipe.chef.profilePhoto}/>
                        </Link>
                    }

                </div>
                <div className="col-9">
                    {searchedRecipe.chef &&
                    <span className='text-capitalize fw-bold'>{searchedRecipe.chef.firstname} {searchedRecipe.chef.lastname}
                        <i className="ps-2 fa-duotone fa-hat-chef"></i><br/>
                        </span>
                    }
                    {searchedRecipe.postedOn}

                    {
                        currentUser && searchedRecipe.chef!==undefined
                        &&
                        <div className='mt-4 float-end'>
                            <p>
                                {
                                    !isLiked
                                    &&
                                    <i className="bi bi-heart pe-2 fs-5 pb-3 ms-1"
                                       onClick={() => likeButtonHandler()}>
                                        {searchedRecipe.numberOfLikes}
                                    </i>
                                }
                                {
                                    isLiked
                                    &&
                                    <i className="bi bi-heart-fill pe-2 fs-5 pb-3 ms-1 text-danger"
                                       onClick={() => disLikeButtonHandler()}>
                                        {searchedRecipe.numberOfLikes}
                                    </i>
                                }

                            </p>
                            <p>
                                {
                                    !isBookmarked
                                    &&
                                    <i className="bi bi-book pe-2 fs-5 ms-1 pb-3"
                                       onClick={() => bookmarkButtonHandler()}>
                                    </i>
                                }
                                {
                                    isBookmarked
                                    &&
                                    <i className="bi bi-book-fill pe-2 fs-5 pb-3 ms-1 text-success"
                                       onClick={() => unbookmarkButtonHandler()}>
                                    </i>
                                }

                            </p>
                            <p>
                                {
                                    (currentUser.userType.toLowerCase() === "staff"
                                    ||
                                    currentUser._id === searchedRecipe.chef._id)
                                    &&
                                    <i className="fa-regular fa-delete-left pe-2 fs-5 pb-3 mt-1 ps-0 fw-light"
                                       onClick={() => deleteRecipeHandler(searchedRecipe._id)}>
                                    </i>
                                }
                            </p>
                        </div>
                    }
                    <div className='mt-2 mb-2 ms-auto me-auto card w-75'>
                        <img
                            src={`/images/${searchedRecipe.image}`}
                            className='card-img' alt="recipe"
                        />
                        <div className='p-2'>
                            <h4>
                                {searchedRecipe.title}
                            </h4>
                            <p>
                                {searchedRecipe.summary}
                            </p>
                            <div className = 'p-2'>
                                <h5><i className="bi bi-cart4 pe-2 "></i>Ingredients</h5>
                                {
                                    searchedRecipe.ingredients && searchedRecipe.ingredients.map((ingredient) => (
                                        <li> {ingredient.name}</li>
                                    ))
                                }
                            </div>
                            <div className = 'p-2'>
                                <h5><i className="bi bi-journal-text pe-2"></i>Steps</h5>
                                {
                                    searchedRecipe.steps && searchedRecipe.steps.map((step) => (
                                        <li> {step}</li>
                                    ))
                                }
                            </div>
                            <div>Total calories : {totalCalories}</div>
                            {
                                currentUser &&
                                <div>
                                    <textarea
                                        onChange={(e) => setCmt(e.target.value)}
                                        className="form-control"></textarea>
                                        <button className="rounded-pill border-0 m-1"
                                                onClick={() => handleCommentButton()}>Comment</button>
                                </div>
                            }
                            <ul className="list-group">
                                {
                                    comments.length > 0
                                    &&
                                    comments.map((comment) =>
                                        <li className="list-group-item">
                                            {comment.comment}
                                            <Link to={`/profile/${comment.postedBy._id}`} className="float-end">
                                                {comment.postedBy.firstname}&nbsp;
                                                {comment.postedBy.lastname}
                                                <img width={25}
                                                     alt='...' className="float-end rounded-circle pb-1 pt-0 ms-1"
                                                     src={comment.postedBy.profilePhoto}/>
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
export default RecipeItem