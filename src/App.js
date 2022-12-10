import EduLab from "./edulab";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./users/user-reducer";

const store = configureStore({
    reducer: {
        users: UserReducer
    }
})

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route index
                               element={<EduLab/>}/>
                        <Route path="/*" element={<EduLab/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
