import {useDispatch, useSelector} from "react-redux";
import {createRecipeThunk} from "./recipes/recipes-thunks";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React, { useState } from "react";

const CreateNewRecipe = () => {
    const {dishId} = useParams()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('Chicken Pasta')
    const [step, setStep] = useState([])
    const newRecipe = {title, step, dishId}
    const {currentUser} = useSelector((state) => state.users)

    const handleSaveBtn = () => {
        const newRecipeObj = {newRecipe:newRecipe,uID:currentUser._id}
        dispatch(createRecipeThunk(newRecipeObj))
    }
    return (
        <>
            <Link to={`/search/details/${dishId}`}
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

        </>
    )
}
export default CreateNewRecipe