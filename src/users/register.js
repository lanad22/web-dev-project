import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./user-thunks";

const Register = () => {
    const [username, setUsername] = useState('dan')
    const [password, setPassword] = useState('dan123')
    const [type, setType] = useState('ENTHUSIAST')
    const [validatePassword, setValidatePassword] = useState('dan123')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password, type}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <h1>Register</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={validatePassword}
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <input type="radio" id="chef" name="userType" value="CHEF"
                   onChange={(e) => setType("CHEF")}/>
            <label htmlFor="chef">Chef</label>
            <input className="ms-4" type="radio" id="enthusiast" name="userType" value="ENTHUSIAST"
                   defaultChecked={true}
                   onChange={(e) => setType("ENTHUSIAST")}/>
            <label htmlFor="enthusiast">Enthusiast</label>
            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary w-100">
                Register
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Register