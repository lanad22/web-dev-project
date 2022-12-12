import {useSelector} from "react-redux";
import {Navigate} from "react-router";

//TODO: Ensure this works on non-refreshes after server integration
const ProtectedRoute = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser != null) {
        return (children)
    } else {
        return (<Navigate to={'/login'}/>)
    }
}
export default ProtectedRoute;