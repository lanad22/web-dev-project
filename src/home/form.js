import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createRecipeThunk} from "../recipes/recipes-thunks";

const Form = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const postBtn = () => {
        const newRecipe = {
            title: title
        }
        dispatch(createRecipeThunk(newRecipe))
    }
    return (
        <ul className = 'p-4 list-group'>
            <li className= 'list-group-item'>
                <input
                    className="form-control mb-2"
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    value='Steps'
                />
                <div className = 'row justify-content-around pt-3'>
                    <div className = 'col-3'>
                        <i className="bi bi-card-image me-2"></i>
                        Photos
                    </div>
                    <div className = 'col-3'>
                        <i className="bi bi-play-btn-fill me-2 text-success"></i>
                        Videos
                    </div>
                    <div className = 'col-3'>
                        <i className="bi bi-calendar-event-fill me-2 text-warning"></i>
                        Events
                    </div>
                    <div className = 'col-3'>
                        <i className="bi bi-geo-fill text-primary me-2"></i>
                        Location
                    </div>
                </div>
                <button
                    onClick={postBtn}
                    className="rounded-pill btn btn-primary ps-3 pe-3 fw-bold">
                    Post
                </button>
            </li>
        </ul>
    );
}
export default Form