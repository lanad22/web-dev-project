import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findAllRecipesThunk, findRecipeByIdThunk} from "./recipes-thunks";


import Stats from "./stats";
import {profileThunk} from "../users/user-thunks";

const RecipeItem = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState("");
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const fetchRecipe = () => {
        fetch(
            `http://localhost:4000/api/recipes/${id}`
        )
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data);
            })
    }

    useEffect(() => {
        fetchRecipe()
        dispatch(profileThunk())
    }, [id]);
    return (

        <div className='list-group-item'>
            <div className='row'>
                <div className="float-start col-auto">
                    <img width={50}
                         alt='...' className="float-end rounded-circle"
                         src='/images/cooking.jpeg'/>
                </div>
                <div className="col-9">
                    {recipe.chef &&
                    <span className='text-capitalize fw-bold'>{recipe.chef.firstname} {recipe.chef.lastname}
                        <i className="ps-2 fa-duotone fa-hat-chef"></i><br/>
                        </span>
                    }
                    {recipe.postedOn}
                    {
                        currentUser &&
                        <div className='mt-4 float-end'>
                            <Stats/>
                        </div>
                    }
                    <div className='mt-2 mb-2 ms-auto me-auto card w-75'>
                        <img
                            src="/images/chicken.jpg"
                            className='card-img' alt="recipe"
                        />
                        <div className='p-2'>
                            <h4>
                                {recipe.title}
                            </h4>
                            <p>
                                Chicken pasta in a garlic tomato cream sauce is the ultimate comfort meal
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
                                    recipe.steps && recipe.steps.map((step) => (
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