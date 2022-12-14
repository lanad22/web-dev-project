import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./user-thunks";
import {Link, Navigate, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return (
        <>
            {
                currentUser &&
                <>

                    <div>
                        <Link to="/" className="text-decoration-none text-black">
                            <i className="bi bi-arrow-left fs-3 fw-bold" style={{fontStyle:"normal"}}>{currentUser.firstName} {currentUser.lastName}</i>
                        </Link>
                        <div>
                            <div>
                                <img src = "/images/banner.jpg"
                                     style= {{
                                         width: `100%`,
                                         maxHeight: `200px`,
                                         overflow: `hidden`
                                     }}
                                />
                                <img src = "/images/owl.jpeg"
                                     className="rounded-circle float-start zindex-popover position-relative" height={100}
                                     style={{
                                         marginTop : `-50px`,
                                         marginLeft : `20px`
                                     }}
                                />
                                <button className="rounded-pill border-secondary fw-bold bg-white border-opacity-25 float-end mt-2 me-2"
                                        style={{
                                            "height": "40px",
                                            "width": "150px"
                                        }}>
                                    <Link to="/editprofile">Edit Profile</Link>

                                </button>
                            </div>
                            <div style={{marginTop:75, marginLeft:20}}>
                                <h3 className="fw-bold text-capitalize">{currentUser.firstname} {currentUser.lastname}</h3>
                                <div className="text-secondary mb-3" style={{marginTop:`-10px`}}>{currentUser.type}</div>
                                <div className="text-secondary mb-3" style={{marginTop:`-20px`}}>{currentUser.email}</div>
                                <p>{currentUser.bio}</p>
                                <i className="bi bi-geo-alt pe-4" style={{fontStyle:"normal"}}>Boston</i>
                                <i className="bi bi-geo pe-4" style={{fontStyle:"normal"}}> Born 12/17</i>
                                <i className="bi bi-calendar pe-4" style={{fontStyle:"normal"}}> Joined 12/17</i>
                                <div className="mt-0">
                                    <div className="float-start pe-4" style={{fontStyle:"normal"}}><span className="fw-bold">-1</span> Following</div>
                                    <div className="float-start pe-4" style={{fontStyle:"normal"}}><span className="fw-bold">-1</span> Followers</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br/>
                    <button className="ms-4 mt-2 btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                    <br/>
                    <br/>
                    <ul>
                        <li><Link to="/cookbook">Cookbook</Link></li>
                        <li><Link to="/profile/liked">Liked Recipes</Link></li>
                        <li><Link to="/profile/commented">Commented On Recipes</Link></li>
                    </ul>

                </>
            }


        </>
    )
}

export default Profile