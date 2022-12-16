import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "./user-thunks";
import {useLocation} from "react-router";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
        console.log('in cu')
        console.log(currentUser)
    }, [useLocation().pathname, ])
    return(children)
}
export default CurrentUser