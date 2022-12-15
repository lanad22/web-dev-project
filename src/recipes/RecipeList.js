import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MinifiedRecipeItem from "./MinifiedRecipeItem";
import {findAllRecipesThunk, findAllRecipesByUserThunk} from "./recipes-thunks";


const RecipeList = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(findAllRecipesThunk())
        {
            currentUser && currentUser.userType.toString().toLowerCase() === 'chef' &&
            dispatch(findAllRecipesByUserThunk(currentUser._id))
        }

    }, [])
    const {recipes} = useSelector((state) => state.recipes)
    const {recipesUser} = useSelector((state) => state.recipes)
    console.log(recipesUser)
    window.localStorage.setItem('recipes', JSON.stringify(recipes));
    return(
        <>
            <ul className = 'p-5 list-group'>
                {
                    <>
                    {
                        recipesUser
                            .map(recipe => <MinifiedRecipeItem key={recipe._id} recipe={recipe} />)
                    }
                    </>
                }
                {
                    currentUser === null && recipes.length !== 0
                    &&
                    <>
                        {
                            recipes
                                .filter(recipe => recipe != null)
                                .map(recipe => <MinifiedRecipeItem key={recipe._id} recipe={recipe} />)
                        }
                    </>
                }

            </ul>
        </>
    )
};
export default RecipeList;