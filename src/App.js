// First component i.e App
import React from 'react';
import './App.css'
//import bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
//import the react router
// import {BrowserRouter as Router,Route} from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Navbar from "./components/Navbar.component";
import CreateUserComponent from "./components/CreateUser.component";
import CreateTaskComponent from "./components/CreateTask.component";



function App() {

    return (
        <Router>
            <div className="container">
               <Navbar/>
                <Routes>
                    {/*<Route exact path='/' element={< CreateUserComponent />}></Route>*/}
                    <Route exact path='/task' element={< CreateTaskComponent />}></Route>
                    <Route exact path='/user' element={< CreateUserComponent />}></Route>
                </Routes>
            </div>
        </Router>
    );

}

export default App;
