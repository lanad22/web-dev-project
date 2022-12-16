import React from "react";
import "../edulab/index.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import Search from "../search/Search";
import {useSelector} from "react-redux";

const NavigationComponent = () => {
    const {pathname} = useLocation();
    const {currentUser} = useSelector((state) => state.users)
    return (
            <div className= 'row'>
                <div className = 'd-none d-md-block col-md-1 col-lg-1 col-xl-1 col-xxl-1 pt-2 pe-0'>
                    <img src="/images/cooking.jpeg" width={50}  alt="..."/>
                </div>
                <div className = 'col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ms-0 ps-0 col-xxl-3 position-relative'>
                    <Search/>
                </div>
                <div className = 'col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 float-end'>
                    <ul className = 'nav nav-pills justify-content-around '>
                        <Link to='/' className = {`nav-item  ${pathname === '/'?'active override-bs':''}`}>
                            <i className='bi bi-houses ps-2 pb-0 fs-4 text-black'></i>
                            <div className="text-black p-0">Home</div>
                        </Link>
                        {
                            currentUser
                            &&
                            <>
                                <Link to='/profile' className = {`nav-item  ${pathname === '/profile'?'active override-bs':''}`}>
                                    <i className='bi bi-person-check ps-2 pb-0 fs-4 text-black'></i>
                                    <div className="text-black p-0">Profile</div>
                                </Link>
                                <Link to='/cookbook' className = {`nav-item  ${pathname === '/cookbook'?'active override-bs':''}`}>
                                    <i className='bi bi-book ps-2 pb-0 fs-4 text-black'></i>
                                    <div className="text-black p-0">Cookbook</div>
                                </Link>
                            </>

                        }
                        {
                            currentUser === null
                            &&
                            <>
                                <Link to='/login' className = {`nav-item  ${pathname === '/login'?'active override-bs':''}`}>
                                    <i className='bi bi-person-plus ps-2 pb-0 fs-4 text-black'></i>
                                    <div className="text-black p-0">Login</div>
                                </Link>
                                <Link to='/register' className = {`nav-item  ${pathname === '/register'?'active override-bs':''}`}>
                                    <i className='bi bi-person-plus ps-4 pb-0 fs-4 text-black'></i>
                                    <div className="text-black p-0">Register</div>
                                </Link>
                            </>
                        }
                        {
                            currentUser
                            &&
                            currentUser.userType.toString().toLowerCase() === 'staff'
                            &&
                            <Link to='/ingredient-upload' className = {`nav-item  ${pathname === '/ingredient-upload'?'active override-bs':''}`}>
                                <i className='bi bi-upload ps-3 pb-0 fs-4 text-black'></i>
                                <div className="text-black p-0">Upload</div>
                            </Link>
                        }
                    </ul>
                </div>
                <hr/>
            </div>
    );
};
export default NavigationComponent;