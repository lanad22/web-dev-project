
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavigationComponent from "./components/navigation/";
import HomeComponent from "./components/home";

function App() {
  return (
      <div className="container">
        <NavigationComponent/>
        <HomeComponent/>
      </div>
  );
}

export default App;
