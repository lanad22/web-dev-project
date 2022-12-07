import React, { useState, useEffect } from "react";
import {useParams} from "react-router";

const Meal = () => {
    const {id} = useParams();
    console.log(id);
    const [detailData, setDetailData] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=3857cfd46a694bcba671969e6bf77753&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                setDetailData(data);
            })
            .catch(() => {
                console.log("error");
            });
    }, [id]);

    return (
        <div className = 'p-3'>
            <div className = 'card w-50 m-auto'>
                <img
                    src = {detailData.image}
                    className='card-img' alt="recipe"
                />
                <h5 className='text-capitalize p-2'>{detailData.title}</h5>
                <ul>
                    <li>
                        Ready in {detailData.readyInMinutes} minutes
                    </li>
                    <li>
                        PUBLISHER: {detailData.sourceName}
                    </li>
                    <li>
                        WEBSITE: <a href={detailData.sourceUrl}>{detailData.sourceUrl}</a>
                    </li>
                </ul>

            </div>
        </div>

    );
};
export default Meal
