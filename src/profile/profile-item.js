import React from "react";
import './index.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const ProfileItem = () => {
    const {pathname} = useLocation();
    return (
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
                    <Link to='/bookmarks' className = {`nav-link  ${pathname === '/edulab/network'?'active override-bs':''}`}>
                       Bookmarks
                    </Link>

                </div>
            </div>
            <div className='row ps-3 pt-3'>
                <h5 className='col-10 fw-bold'>Lana</h5>
                <div className='col-2 pe-2 fw-bold float-end'>
                    <i className="bi bi-pencil-square"></i>
                    Edit
                </div>
                <span className='text-secondary'>@lanad22</span>
            </div>
            <div className='ps-3 pt-2'>
                'this is profile'
            </div>
        </div>
    );
};
export default ProfileItem;