import React from "react";
import "./index.css";
import {useLocation} from "react-router";

const NavigationComponent = () => {
    return (
        <div className = 'row width-75'>
            <div className= 'row ms-5 me-5 p-0'>
                <div className = 'col-auto pt-3 pe-0'>
                    <img src="/images/owl.jpeg" width={40}  alt="..."/>
                </div>
                <div className = 'float-start ps-1 col-3 position-relative'>
                    <input
                        placeholder="Search"
                        className="ps-5 mt-3 form-control rounded"/>
                    <i className="bi bi-search wd-nudge-up position-relative"></i>
                </div>
                <div className = 'col-7'>
                    <ul className = 'nav nav-pills justify-content-around'>
                        <li className='nav-item'>
                            <i className='bi bi-houses ps-2 pb-0 fs-4'></i>
                            <a href="/#" className="nav-link active override-bs text-black p-0">Home</a>
                        </li>
                        <li className='nav-item'>
                            <i className="bi bi-bookmarks ps-4 pb-0 fs-4"></i>
                            <a href="/#" className="nav-link text-black p-0">Bookmarks</a>
                        </li>
                        <li className='nav-item'>
                            <i className="bi bi-person-check ps-2 pb-0 fs-4"></i>
                            <a href="/#" className="nav-link text-black p-0">Profile</a>
                        </li>
                        <li className='nav-item'>
                            <i className="bi bi-person-plus ps-4 pb-0 fs-4"></i>
                            <a href="/#" className="nav-link text-black p-0">Login/Sign-up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default NavigationComponent;