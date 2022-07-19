import React from "react";
import {NavLink} from 'react-router-dom'



function Menu(props){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
            <NavLink to={`/`}>React Curd</NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
             <nav className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={`/home`}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/create`}>Create</NavLink>
                </li>
                </nav>
            </div>
            </div>
        </nav>
    )
}
export default Menu;