import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component{
    render() {
        return(
            //create the navbar
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            {/*    link tags*/}
                <Link to="/" className="navbar-brand">Task Manager</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav" >
                        <li className="navbar-item">
                            <Link to="/task" className="navbar-brand">Create Task</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/user" className="navbar-brand">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
