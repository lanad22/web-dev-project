import EduLab from "./edulab";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<EduLab/>}/>
                    <Route path="/*" element={<EduLab/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
