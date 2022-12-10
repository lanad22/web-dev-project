import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, profileThunk, registerThunk} from "./user-thunks";
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('bobhope@gmail.com')
    const [password, setPassword] = useState('bob123')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {email, password}
        dispatch(loginThunk(loginUser))
        navigate('/profile');
    }
    return(
        <>
            {
                currentUser != null
                &&
                <Navigate to={'/profile'} />
            }
            <h1>Login</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <button
                onClick={handleLoginBtn}
                className="btn btn-primary w-100">
                Login
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Login