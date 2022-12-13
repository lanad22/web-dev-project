import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllRecipesThunk, deleteRecipeThunk} from "./recipes-thunks";
import {profileThunk} from "../users/user-thunks";
import {Link} from "react-router-dom";

const RecipeList = () => {
    const {recipes} = useSelector((state) => state.recipes)
    const {currentUser} = useSelector((state) => state.users)
    console.log(recipes)
    const slicedRecipes = recipes.slice(0,5);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllRecipesThunk())
        dispatch(profileThunk())
    })
    const deleteRecipeHandler = (id) => {
        dispatch(deleteRecipeThunk(id))
    }
    return(
        <>
        <ul className = 'p-5 list-group'>
            {
                slicedRecipes.map((recipe) => {
                    return (
                        <li key = {recipe._id} className = 'list-group-item'>
                            <div className = 'row'>
                                <div className="float-start col-auto">
                                    <img width={50}
                                         alt = '...' className="float-end rounded-circle"
                                         src='/images/cooking.jpeg'/>
                                </div>
                                <div className="col-10">
                                    <div className = 'row float-end'>
                                        <div className = 'col-6 btn pe-0'>
                                            <Link to={{
                                                pathname: `/recipes/${recipe._id}`}}><i className="bi bi-three-dots text-black"></i></Link>
                                        </div>
                                        {
                                            currentUser && currentUser.userType === 'moderator' &&
                                            <div className='col-6 btn'>
                                                <i className="fa-regular fa-delete-left"
                                                   onClick={() => deleteRecipeHandler(recipe._id)}
                                                ></i>
                                            </div>
                                        }
                                    </div>
                                    <span className='text-capitalize fw-bold'>{recipe.chef.firstname} {recipe.chef.lastname}</span>
                                    <i className="ps-2 fa-duotone fa-hat-chef"></i><br/>
                                    {recipe.postedOn}
                                    <div className = 'mt-2 mb-2 card'>
                                        <img
                                            src = "/images/chicken.jpg"
                                            className='card-img' alt="recipe"
                                        />
                                        <div className = 'p-2'>
                                            <h4>
                                                {recipe.title}
                                            </h4>
                                            <p>
                                                Chicken pasta in a garlic tomato cream sauce is the ultimate comfort meal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
        </>
    )
};
export default RecipeList;