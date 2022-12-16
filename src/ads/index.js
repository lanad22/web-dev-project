import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTrendingResultThunk} from "../search/search-thunks";

const Ads = () => {
    const dispatch = useDispatch();
    const {trending} = useSelector((state) => state.results)
    useEffect(() => {
        dispatch(findTrendingResultThunk())
    }, [])
    return(
        <>
            <div className="ms-3 p-0 list-group border border-light override-bs border-top-0 border-bottom-0">
                <h6 className = 'p-3 fw-bold list-group-item border-start-0 border-end-0'>
                    <i className="fa-duotone fa-chart-line-up pe-2"></i>
                    Trending Now
                </h6>

                {trending.recipes && trending.recipes.map((meal) =>
                    (
                        <div className='list-group-item border-start-0 border-end-0'>
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