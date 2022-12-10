import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfileThunk} from "./user-thunks";

const EditProfile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState(currentUser.firstname)
    const [lastname, setLastname] = useState(currentUser.lastname)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState(currentUser.password)
    const [validatePassword, setValidatePassword] = useState(currentUser.password)

    const [error, setError] = useState(null)

    const saveUser = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const user = {}
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.password = password;

        dispatch(editProfileThunk(user));
    }
    return (
        <>
            <div className="fs-3">
                <span><Link to="/tuiter/profile" className="text-black text-decoration-none">
                    <i className="bi bi-x-lg">
                </i></Link></span> Edit Profile</div>
            <img src = "/images/starship.jpeg"
                 style= {{
                     width: `100%`,
                     maxHeight: `200px`,
                     overflow: `hidden`
                 }}
            />
            <img src = "/images/spacex.jpeg"
                 className="rounded-circle float-start zindex-popover position-relative" height={100}
                 style={{
                     marginTop : `-50px`,
                     marginLeft : `20px`
                 }}
            />
            <form style={{marginTop:50}}>
                {
                    error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                <div className="form-group">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" className="form-control border-opacity-0" id="name" aria-describedby="firstname"
                           value={firstname.toString()}
                           onChange={(e) => setFirstname(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Bio</label>
                    <textarea className="form-control border-opacity-0" id="bio" aria-describedby="lastname"
                              value={lastname.toString()}
                              onChange={(e) => setLastname(e.target.value)}></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control border-opacity-0" id="location" aria-describedby="email"
                            value={email.toString()}
                           onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control border-opacity-0" id="password" aria-describedby="password"
                           value={password.toString()}
                           onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="validatePassword">Confirm Password</label>
                    <input type="password" className="form-control border-opacity-0" id="validatePassword" aria-describedby="validatePassword"
                           value={validatePassword.toString()}
                           onChange={(e) => setValidatePassword(e.target.value)}></input>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary"
                                                   onClick={saveUser}>Save</button>
                <br/>
                <div>Switch to Professional</div>
            </form>
        </>

    );
}
export default EditProfile;
