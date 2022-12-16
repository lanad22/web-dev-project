import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./user-thunks";
import {Navigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('songoku@gmail.com')
    const [password, setPassword] = useState('son123')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {email, password}
        dispatch(loginThunk(loginUser))
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
            <label>Email</label>
            <input
                className="form-control mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input
                className="form-control mb-2"
                value={password}
                type="password"
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