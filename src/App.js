import EduLab from "./edulab";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./users/user-reducer";
import CurrentUser from "./users/current-user";

const store = configureStore({
    reducer: {
        users: UserReducer
    }
})

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CurrentUser>
                    <div className="container">
                            <Routes>
                                <Route index
                                       element={<EduLab/>}/>
                                <Route path="/*" element={<EduLab/>}/>
                            </Routes>
                        </div>
                </CurrentUser>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
