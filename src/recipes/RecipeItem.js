import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Stats from "./stats";
import {findRecipeByIdThunk} from "./recipes-thunks";
import {Link} from "react-router-dom";

const RecipeItem = () => {
    const {id} = useParams();
    const {searchedRecipe} = useSelector((state) => state.recipes)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findRecipeByIdThunk(id))
    }, [])

    return (

        <div className='list-group-item'>
            <div className='row'>
                <div className="float-start col-auto">
                    {
                        searchedRecipe.chef &&
                        <Link to={`/profile/${searchedRecipe.chef._id}`}>
                            <img width={50}
                                 alt='...' className="float-end rounded-circle"
                                 src='/images/owl.jpeg'/>
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

                    <div className='mt-4 float-end'>
                        <Stats _id={id} recipe={searchedRecipe}/>
                    </div>

                    <div className='mt-2 mb-2 ms-auto me-auto card w-75'>
                        <img
                            src="/images/chicken.jpg"
                            className='card-img' alt="recipe"
                        />
                        <div className='p-2'>
                            <h4>
                                {searchedRecipe.title}
                            </h4>
                            <p>
                                Chicken pasta ?? in a garlic tomato cream sauce is the ultimate comfort meal
                            </p>
                            <div className = 'p-2'>
                                <h5><i className="bi bi-cart4 pe-2 "></i>Ingredients</h5>
                                <li>
                                    1
                                </li>
                                <li>
                                    2
                                </li>
                            </div>
                            <div className = 'p-2'>
                                <h5><i className="bi bi-journal-text pe-2"></i>Steps</h5>
                                {
                                    searchedRecipe.steps && searchedRecipe.steps.map((step) => (
                                        <li>{step}</li>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
export default RecipeItem