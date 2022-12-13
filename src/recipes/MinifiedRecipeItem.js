import {useDispatch, useSelector} from "react-redux";
import {deleteRecipeThunk} from "./recipes-thunks";
import {Link} from "react-router-dom";

const MinifiedRecipeItem = ({recipe}) => {
    const {currentUser} = useSelector((state) => state.users)
    const {recipes} = useSelector((state) => state.recipes)
    const dispatch = useDispatch()
    const deleteRecipeHandler = (id) => {
        dispatch(deleteRecipeThunk(id))
    }
    console.log(recipes)
    return (
        <li key = {recipe._id} className = 'list-group-item'>
            <div className = 'row'>
                <div className="float-start col-auto">
                    <Link to={`/profile/${recipe.chef._id}`}>
                        <img width={50}
                             alt = '...' className="float-end rounded-circle"
                             src='/images/owl.jpeg'/>
                    </Link>

                </div>
                <div className="col-10">
                    <div className = 'row float-end'>
                        <div className = 'col-6 btn pe-0'>
                            <Link to={{
                                pathname: `/recipes/${recipe._id}`}}>
                                <i className="bi bi-three-dots text-black"></i></Link>
                        </div>
                        {
                            currentUser && currentUser.userType === 'moderator' &&
                            <div className='col-6 btn'>
                                <i className="fa-regular fa-delete-left"
                                   onClick={() => deleteRecipeHandler(recipe._id)}
                                ></i>
                            </div>
                        }
                    </div>
                    <span className='text-capitalize fw-bold'>{recipe.chef.firstname} {recipe.chef.lastname}</span>
                    <i className="ps-2 fa-duotone fa-hat-chef"></i><br/>
                    {recipe.postedOn}
                    <div className = 'mt-2 mb-2 card'>
                        <img
                            src = "/images/chicken.jpg"
                            className='card-img' alt="recipe"
                        />
                        <div className = 'p-2'>
                            <h4>
                                {recipe.title}
                            </h4>
                            <p>
                                Chicken pasta in a garlic tomato cream sauce is the ultimate comfort meal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MinifiedRecipeItem;