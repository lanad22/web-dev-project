import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../users/user-thunks";
import {useState} from "react";
import {uploadIngredientsThunk} from "./ingredients-thunks";

const Upload = () => {
    const [ingredient, setIngredient] = useState('')
    const [calorie, setCalorie] = useState('')
    const [protein, setProtein] = useState('')
    const [fat, setFat] = useState('')
    const [carbohydrate, setCarbohydrate] = useState('')
    const {currentUser} = useSelector((state) => state.users)
    const {uploaded} = useSelector((state) => state.ingredients)
    const dispatch = useDispatch()
    const handleUploadBtn = () => {
        const item = {ingredient, calorie, protein, fat, carbohydrate}
        dispatch(uploadIngredientsThunk(item))
    }
    return (
    <>
        {
            currentUser.userType.toString().toLowerCase() != 'staff'
            &&
            <Navigate to={'/profile'} />
        }
        <h1>Ingredient Upload</h1>
        {
            uploaded &&
            <div className="alert alert-success">
                Uploaded Successfully!
            </div>
        }
        <label>Ingredient</label>
        <input
            className="form-control mb-2"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}/>
        <label>Calorie(kcal)</label>
        <input
            className="form-control mb-2"
            value={calorie}
            onChange={(e) => setCalorie(e.target.value)}/>
        <label>Protein(g)</label>
        <input
            className="form-control mb-2"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}/>
        <label>Fat(g)</label>
        <input
            className="form-control mb-2"
            value={fat}
            onChange={(e) => setFat(e.target.value)}/>
        <label>Carbohydrates(g)</label>
        <input
            className="form-control mb-2"
            value={carbohydrate}
            onChange={(e) => setCarbohydrate(e.target.value)}/>

        <button
            onClick={handleUploadBtn}
            className="btn btn-primary w-100">
            Upload
        </button>
    </>
    )
}

export default Upload;