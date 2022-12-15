import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findResultByIdThunk} from "./search-thunks";
import {findRecipeByDishIdThunk} from "../recipes/recipes-thunks";
import MinifiedRecipeItem from "../recipes/MinifiedRecipeItem";
import {Link} from "react-router-dom";

const Meal = () => {
    const {query,id} = useParams();
    console.log(query)
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
        <div className='p-3 row'>
            <Link to={`/search/${query}`}>
                <i className="fa-solid fa-arrow-left-long text-black fs-5"></i>
            </Link>

            <div className='p-3 row'>
                <div className='col'>
                    <div className='card m-auto'>
                        <img
                            src={detail.image}
                            className='card-img' alt="recipe"
                        />

                    </div>
                </div>
                <div className='col pb-3'>
                    <h4 className='text-center fw-bold text-capitalize pb-2'>{detail.title}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <i className="fa-solid fa-grill-hot pe-3"></i>
                            ready in {detail.readyInMinutes} minutes
                        </li>
                        <li className='list-group-item'>
                            <i className="fa-solid fa-utensils pe-3"></i>
                            {detail.servings} servings
                        </li>
                        <li className='list-group-item'>
                            <i className="fa-solid fa-link pe-2"></i>
                            <u><a href={detail.sourceUrl} className='text-black'>{detail.sourceUrl}</a></u>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='p-2'>
                <h5 className='text-center pb-4'>Get started with our recipes</h5>

                <div className='m-auto w-75 list-group'>
                    {
                        recipes
                            .filter(recipe => recipe != null)
                            .map(recipe =>
                                <MinifiedRecipeItem key={recipe._id} recipe={recipe}/>
                            )
                    }
                    <div className = 'text-center fw-bold'>
                    {

                        currentUser &&
                        <Link to={`/details/${detail.id}/create-new-recipe`}
                              className='list-group-item'>
                            ...<br/>
                            Create a new recipe<br/>
                            <i className="fa-regular fa-layer-plus fs-4"></i>
                        </Link>
                    }
                    </div>
                </div>
            </div>


        </div>

    );
};
export default Meal
