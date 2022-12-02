
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HomeComponent from "./components/home";
import BookmarkComponent from "./components/bookmarks";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*"
                           element={<HomeComponent/>}/>
                    <Route path="/bookmarks"
                           element={<BookmarkComponent/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
