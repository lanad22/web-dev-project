import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import Search from "../search/Search";

const NavigationComponent = () => {
    const {pathname} = useLocation();
    return (
            <div className= 'row'>
                <div className = 'col-auto pt-2 pe-0 ps-0'>
                    <img src="/images/cooking.jpeg" width={50}  alt="..."/>
                </div>
                <div className = 'ps-2 col-3 position-relative'>
                    <Search/>
                </div>
                <div className = 'col-8 float-end'>
                    <ul className = 'nav nav-pills justify-content-around '>
                        <Link to='/' className = {`nav-item  ${pathname === '/'?'active override-bs':''}`}>
                            <i className='bi bi-houses ps-2 pb-0 fs-4 text-black'></i>
                            <div className="text-black p-0">Home</div>
                        </Link>
                        <Link to='/profile' className = {`nav-item  ${pathname === '/profile'?'active override-bs':''}`}>
                            <i className='bi bi-person-check ps-2 pb-0 fs-4 text-black'></i>
                            <div className="text-black p-0">Profile</div>
                        </Link>
                        <li className='nav-item'>
                            <i className="bi bi-person-plus ps-4 pb-0 fs-4"></i>
                            <a href="/Users/rushikeshmokashi/Desktop/2022/fall/webdev/web-dev-project/public#" className="nav-link text-black p-0">Register</a>
                        </li>


                    </ul>
                </div>
                <hr/>
            </div>
    );
};
export default NavigationComponent;