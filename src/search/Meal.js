import React, { useEffect } from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findResultByIdThunk} from "./search-thunks";
import {findRecipeByDishIdThunk} from "../recipes/recipes-thunks";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {Link} from "react-router-dom";

const Meal = () => {
    const {id} = useParams();
    const {detail} = useSelector((state) => state.results)
    const {recipes} = useSelector((state) => state.recipes)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(findResultByIdThunk(id))
        dispatch(findRecipeByDishIdThunk(id))
    }, [id]);


    console.log(recipes)
    return (
        <div className = 'p-3'>
            <div className = 'card w-50 m-auto'>
                <img
                    src = {detail.image}
                    className='card-img' alt="recipe"
                />
                <h5 className='text-capitalize p-2'>{detail.title}</h5>
                <ul>
                    <li>
                        Ready in {detail.readyInMinutes} minutes
                    </li>
                    <li>
                        PUBLISHER: {detail.sourceName}
                    </li>
                    <li>
                        WEBSITE: <a href={detail.sourceUrl}>{detail.sourceUrl}</a>
                    </li>
                </ul>

            </div>

            <div>
                <h4>Recipes for {detail.title}</h4>
                {

                    currentUser &&
                    <Link to={`/details/${detail.id}/create-new-recipe`}
                            className = 'btn btn-primary rounded-pill'>
                        Create a new recipe
                    </Link>
                }

                {
                    recipes
                        .filter(recipe => recipe != null)
                        .map(recipe => <MinifiedRecipeItem key={recipe._id} recipe={recipe} />)
                }
            </div>



        </div>

    );
};
export default Meal
