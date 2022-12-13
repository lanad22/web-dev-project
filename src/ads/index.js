import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTrendingResultThunk} from "../search/search-thunks";
import {Link} from "react-router-dom";


const Ads = () => {
    const dispatch = useDispatch();
    const {results} = useSelector((state) => state.results)
    useEffect(() => {
        console.log('dispatch')
        dispatch(findTrendingResultThunk())
    }, [])
    console.log(results)
    return(
        <>
            <div className="p-2 list-group border border-light">
                <h6 className = 'p-3 fw-bold'>
                    <i className="fa-duotone fa-chart-line-up pe-2"></i>
                    Trending Now
                </h6>

                {results.recipes && results.recipes.map((meal) =>
                    (
                        <div className='list-group-item'>
                            <div className = 'row p-2'>
                                <div className = 'col-10'>
                                    {meal.title}
                                </div>
                                <div className = 'col-2 p-0'>
                                    <img src = {meal.image} className = 'img-fluid rounded'/>
                                </div>

                            </div>

                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default Ads;