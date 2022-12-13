import React from "react"
import "./index.css"
import Stats from "../recipes/stats";
import {useSelector} from "react-redux";

const CookbookItem = (
    {
        post
    }
    ) => {
    const {currentUser} = useSelector((state) => state.users);
    return(
        <div className='list-group-item'>
            <div className='row'>
                <div className="float-start col-auto">
                    <img width={50}
                         alt='...' className="float-end rounded-circle"
                         src='/images/cooking.jpeg'/>
                </div>
                <div className="col-9">
                    {post.chef &&
                        <span className='text-capitalize fw-bold'>{post.chef.firstname} {post.chef.lastname}
                            <i className="ps-2 fa-duotone fa-hat-chef"></i><br/>
                        </span>
                    }
                    {post.postedOn}
                    {
                        currentUser &&
                        <div className='mt-4 float-end'>
                            <Stats/>
                        </div>
                    }
                    <div className='mt-2 mb-2 ms-auto me-auto card w-75'>
                        <img
                            src="/images/chicken.jpg"
                            className='card-img' alt="recipe"
                        />
                        <div className='p-2'>
                            <h4>
                                {post.title}
                            </h4>
                            <p>
                                Chicken pasta in a garlic tomato cream sauce is the ultimate comfort meal
                            </p>
                            <div className = 'p-2'>
                                <h5><i className="bi bi-cart4 pe-2 "></i>Ingredients</h5>
                                <li>
                                    1
                                </li>
                                <li>
                                    2
                                </li>
                            </div>
                            <div className = 'p-2'>
                                <h5><i className="bi bi-journal-text pe-2"></i>Steps</h5>
                                {
                                    post.steps && post.steps.map((step) => (
                                        <li>{step}</li>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};
export default CookbookItem;
