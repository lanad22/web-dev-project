import {useDispatch, useSelector} from "react-redux";
import {createRecipeThunk} from "./recipes/recipes-thunks";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {findIngredientsThunk} from "./ingredients/ingredients-thunks";

const CreateNewRecipe = () => {
    const {query, dishId} = useParams()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [step, setStep] = useState([])
    const newRecipe = {title, step, dishId}
    const {currentUser} = useSelector((state) => state.users)
    const [name, setName] = useState('')
    const {found} = useSelector((state) => state.ingredients)

    const search = found[0]

    const handleSearchBtn = (name) => {
        dispatch(findIngredientsThunk(name))
    }
    const handleSaveBtn = () => {
        const newRecipeObj = {newRecipe: newRecipe, uID: currentUser._id}
        dispatch(createRecipeThunk(newRecipeObj))
    }
    return (
        <div className='p-3'>

            <div className='list-group m-auto'>
                <div className='list-group-item wd-background text-center font-italic'>
                    <i className="fa-light fa-pen-field pb-2"></i>
                    <h5>New Recipe</h5>
                </div>
                <div className='p-4 list-group-item'>
                    <label for="title">Title</label>
                    <input className='mt-2 form-control w-75 m-auto'
                           id='title'
                           placeholder='e.g. Chicken Pasta'
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='p-4 list-group-item'>
                    <label htmlFor="summary">Summary</label>
                    <textarea className='mt-2 form-control w-75 m-auto'
                              id='summary'
                              placeholder='Short description about the recipe'
                              onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='p-4 list-group-item'>
                    <ul className='list-group list-group-flush'>
                        Step
                        <li className='list-group-item'>
                            <input className='ms-5 form-control border-0 w-75'
                                   placeholder='step 1'
                            />
                        </li>
                        <li className='list-group-item'>
                            <input className='ms-5 form-control border-0 w-75'
                                   placeholder='step 2'
                            />
                        </li>
                        <li className='list-group-item'>
                            <input className='ms-5 form-control border-0 w-75'
                                   placeholder='step 3'
                            />
                        </li>
                        <li className='list-group-item'>
                            <input className='ms-5 form-control border-0 w-75'
                                   placeholder='step 4'
                            />
                        </li>
                    </ul>
                </div>
                <div className='p-4 list-group-item'>
                    Search and Add Ingredients
                    <div className='pt-4 pb-5 input-group w-75 m-auto'>

                        <input className='form-control'
                               placeholder='e.g. butter'
                               onChange={(e) => setName(e.target.value)}
                        />
                        <div input-group-append mt-3>
                            <button
                                className='position-absolute btn btn-secondary'
                                onClick={() => handleSearchBtn(name)}>
                                <i className="bi bi-search text-white"></i>
                            </button>
                        </div>

                    </div>

                    {
                        search &&
                        <div>
                            <span>Nutrition Facts</span>
                            <div className='ps-4 pt-2 w-75 m-auto'>
                                <ul className='pt-3 list-group list-group-horizontal'>
                                    <li className='list-group-item'>{search.calories} calories</li>
                                    <li className='list-group-item'>{search.protein} grams of protein</li>
                                    <li className='list-group-item'>{search.fat} grams of fat</li>
                                    <li className='list-group-item'>{search.carbs} of carbohydrate</li>
                                </ul>
                                <div className='pt-4 text-center'>
                                    <button className='btn border-secondary'>
                                        <i className="fa-solid fa-plus-large pe-2"></i>
                                        Add {search.name} to your recipe
                                    </button>
                                </div>


                            </div>
                        </div>

                    }


                </div>


            </div>

            <Link to={`/search/${query}/details/${dishId}`}
                  className='btn btn-outline-primary rounded-pill'
                  onClick={handleSaveBtn}>
                Save
            </Link>

        </div>
    )
}
export default CreateNewRecipe
