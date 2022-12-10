import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./user-thunks";
import {Link, Navigate, useNavigate} from "react-router-dom";
import React from "react";
import './index.css'

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

                    <div className="list-group-item p-0 text">
                        <img src='/images/banner.jpg' className="wd-banner" alt="..."/>
                        <div className='row pt-2 pe-4'>
                            <div className='col-3'>
                                <img src='/images/owl.jpeg' width={110} className="wd-profile-image"
                                     alt="..."/>
                            </div>
                            <div className = 'col-9 nav nav-tabs'>
                                <li className = 'nav-link active'>
                                    Profile
                                </li>
                                <Link to='/bookmarks'>
                                    Bookmarks
                                </Link>

                            </div>
                        </div>
                        <div className='row ps-3 pt-3'>
                            <h5 className='col-10 fw-bold'>{currentUser.firstname} {currentUser.lastname}</h5>
                            <h5 className='col-10 fw-bold'>{currentUser.email}</h5>
                            <div className='col-2 pe-2 fw-bold float-end'>
                                <i className="bi bi-pencil-square"></i>
                                Edit
                            </div>
                            <span className='text-secondary'>{currentUser.type}</span>
                        </div>
                        <div className='ps-3 pt-2'>
                            'this is profile'
                        </div>
                    </div>

                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            }


        </>
    )
}

export default Profile