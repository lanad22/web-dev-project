import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationComponent = () => {
    const {pathname} = useLocation();
    return (
            <div className= 'row'>
                <div className = 'col-auto pt-3 pe-0 ps-0'>
                    <img src="/images/owl.jpeg" width={40}  alt="..."/>
                </div>
                <div className = 'float-start ps-1 col-3 position-relative'>
                    <input
                        placeholder="Search"
                        className="ps-5 mt-3 form-control rounded"/>
                    <i className="bi bi-search wd-nudge-up position-relative"></i>
                </div>
                <div className = 'col-8'>
                    <ul className = 'nav nav-pills justify-content-around'>
                        <Link to='/' className = {`nav-item  ${pathname === '/'?'active override-bs':''}`}>
                            <i className='bi bi-houses ps-2 pb-0 fs-4 text-black'></i>
                            <div className="text-black p-0">Home</div>
                        </Link>
                        <Link to='/edulab/bookmarks' className = {`nav-item  ${pathname === '/edulab/bookmarks'?'active override-bs':''}`}>
                            <i className='bi bi-houses ps-4 pb-0 fs-4 text-black'></i>
                            <div className="text-black p-0">Bookmarks</div>
                        </Link>
                        <Link to='/edulab/profile' className = {`nav-item  ${pathname === '/edulab/profile'?'active override-bs':''}`}>
                            <i className='bi bi-person-check ps-2 pb-0 fs-4 text-black'></i>
                            <div className="text-black p-0">Profile</div>
                        </Link>
                        <li className='nav-item'>
                            <i className="bi bi-person-plus ps-4 pb-0 fs-4"></i>
                            <a href="/#" className="nav-link text-black p-0">Login/Sign-up</a>
                        </li>

                    </ul>
                </div>
                <hr/>
            </div>
    );
};
export default NavigationComponent;