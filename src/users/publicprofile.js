import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "./user-thunks";

const PublicProfile = () => {
    const {uid} = useParams();
    console.log(uid)
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid])
    const {searchedUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
     return (
        <>
            {
                searchedUser &&
                <>

                    <div>
                        <Link to="/" className="text-decoration-none text-black">
                            <i className="bi bi-arrow-left fs-3 fw-bold" style={{fontStyle:"normal"}}>{searchedUser.firstName} {searchedUser.lastName}</i>
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
                            </div>
                            <div style={{marginTop:75, marginLeft:20}}>
                                <h3 className="fw-bold text-capitalize">{searchedUser.firstname} {searchedUser.lastname}</h3>
                                <div className="text-secondary mb-3" style={{marginTop:`-10px`}}>{searchedUser.type}</div>
                                <div className="text-secondary mb-3" style={{marginTop:`-20px`}}>{searchedUser.email}</div>
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

                </>
            }


        </>
    )
}

export default PublicProfile;