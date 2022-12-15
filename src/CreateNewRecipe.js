import {useDispatch, useSelector} from "react-redux";
import {createRecipeThunk} from "./recipes/recipes-thunks";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import {findIngredientsThunk} from "./ingredients/ingredients-thunks";

const CreateNewRecipe = () => {
    const {query, dishId} = useParams()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('Chicken Pasta')
    const [step, setStep] = useState([])
    const newRecipe = {title, step, dishId}
    const {currentUser} = useSelector((state) => state.users)
    const [name, setName] = useState('')
    const {found} = useSelector((state) => state.ingredients)

    const handleSearchBtn = (name) => {
        dispatch(findIngredientsThunk(name))
    }
    console.log(found)
    const handleSaveBtn = () => {
        const newRecipeObj = {newRecipe:newRecipe,uID:currentUser._id}
        dispatch(createRecipeThunk(newRecipeObj))
    }
    return (
        <>
            <Link to={`/search/${query}/details/${dishId}`}
                  className = 'btn btn-primary rounded-pill'
                  onClick={handleSaveBtn}>
                Save
            </Link>
            <input className = 'form-control'
                   placeholder='title'
                   onChange={(e) => setTitle(e.target.value)}
            />
            <input className = 'form-control'
                   placeholder='step'
                   onChange={(e) => setStep(e.target.value)}
            />
            <input className = 'form-control'
                   placeholder = 'search'
                   onChange={(e) => setName(e.target.value)}
            />
            <button
                className = 'position-absolute btn btn-secondary'
                onClick = {() => handleSearchBtn(name)}>
                <i className="bi bi-search text-white"></i>
            </button>

        </>
    )
}
export default CreateNewRecipe
