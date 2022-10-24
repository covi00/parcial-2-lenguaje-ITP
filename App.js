import Header from './Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {fontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    
    <div className="App" >
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  );
}

export default App;
