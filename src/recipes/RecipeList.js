import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MinifiedRecipeItem from "./MinifiedRecipeItem";
import {
    findAllRecipesThunk,
    findAllRecipesByUserThunk,
    findAllCommentedRecipesForUserThunk,
    findAllLikedRecipesForUserThunk
} from "./recipes-thunks";

const RecipeList = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users)


    useEffect(() => {
        let currUser = currentUser === null ? JSON.parse(window.localStorage.getItem("currentUser")) : currentUser;
        dispatch(findAllRecipesThunk())
        {
            currentUser &&
            dispatch(findAllRecipesByUserThunk(currUser._id))
        }
        {
            currentUser &&
            dispatch(findAllLikedRecipesForUserThunk(currUser._id))
        }
        {
            currentUser &&
            dispatch(findAllCommentedRecipesForUserThunk(currUser._id))
        }
    }, [dispatch])
    const {recipes} = useSelector((state) => state.recipes)
    const {recipeUser} = useSelector((state) => state.recipes)
    const {likedRecipeUser} = useSelector((state) => state.recipes)
    const {commentedRecipeUser} = useSelector((state) => state.recipes)

    window.localStorage.setItem('recipes', JSON.stringify(recipes));
    function unite() {
        return [].concat.apply([], arguments).filter(function(elem, index, self) {
            return self.indexOf(elem) === index;
        });
    }

    let mappedLiked = likedRecipeUser.map((rec) => rec.likedRecipe);
    let mappedCommented = commentedRecipeUser.map((rec) => rec.recipe);

    const recipeUserCopy = [...recipeUser]
    const mappedLikedCopy = [...mappedLiked]
    const mappedCommentedCopy = [...mappedCommented]
    const res = unite(recipeUserCopy.reverse(), mappedLikedCopy.reverse(), mappedCommentedCopy.reverse())
    console.log(res)
    const resIds = res.filter(r => r !== null).map(r => r._id);
    //console.log(resIds);
    const leftover = recipes.filter(rec => !resIds.includes(rec._id));
    console.log(leftover);
    return(
        <>
            <ul className = 'ps-5 pe-5 pb-5 pt-3 list-group'>
                {
                    currentUser &&
                       <>
                            {
                                res.filter((recipe) => recipe !== null)
                                    .map(recipe => <MinifiedRecipeItem key={recipe._id} recipe={recipe}/>)
                            }
                           {
                               leftover.filter((recipe) => recipe !== null)
                                   .map(recipe => <MinifiedRecipeItem key={recipe._id} recipe={recipe}/>)
                           }

                       </>
                }
                {
                    currentUser === null &&
                    recipes.length !== 0
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