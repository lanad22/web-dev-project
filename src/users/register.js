import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./user-thunks";

const Register = () => {
    const [firstname, setFirstname] = useState('bob')
    const [lastname, setLastname] = useState('hope')
    const [email, setEmail] = useState('bobhope@gmail.com')
    const [password, setPassword] = useState('bob123')
    const [userType, userUserType] = useState('ENTHUSIAST')
    const [validatePassword, setValidatePassword] = useState('bob123')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        console.log("123")
        const newUser = {firstname, lastname, email, password, userType}
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
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={password}
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={validatePassword}
                type={"password"}
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <input type="radio" id="chef" name="userType" value="CHEF"
                   onChange={(e) => userUserType("CHEF")}/>
            <label htmlFor="chef">Chef</label>
            <input className="ms-4" type="radio" id="enthusiast" name="userType" value="ENTHUSIAST"
                   defaultChecked={true}
                   onChange={(e) => userUserType("ENTHUSIAST")}/>
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