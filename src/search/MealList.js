import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {findAllResultsThunk} from "./search-thunks";
import {useDispatch, useSelector} from "react-redux";
import {findAllRecipesThunk} from "../recipes/recipes-thunks";

const MealList = () => {
    const {query} = useParams();
    console.log(query)
    const dispatch = useDispatch();
    const {results} = useSelector((state) => state.results)
    useEffect(() => {
        console.log('dispatch')
        dispatch(findAllResultsThunk(query))
    }, [])

    console.log(results)
    return (
        <>
            <div className='pt-3 text-center'>
                <h4>Results</h4>
            </div>
            <div className='row'>
                {results.results && results.results.map((meal) => {
                    return (

                        <div key={meal.title} className='p-4 col-4'>
                            <Link to={{
                                pathname: `/details/${query}/${meal.id}`
                            }}>
                                <div className='card'>
                                    <img
                                        src={meal.image}
                                        className='card-img' alt="recipe"
                                    />
                                    <h6 className='p-3 text-capitalize text-black'>{meal.title}</h6>
                                </div>
                            </Link>
                        </div>
                    );
                })}
                    </div>
                    </>



                    );
                };
                export default MealList
