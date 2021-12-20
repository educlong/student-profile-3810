import React, { Component } from 'react';
import {NavLink} from "react-router-dom"; 
/**
 * @date Dec 19, 2021
 * @author DUC LONG NGUYEN (Paul)
 * @A The header of the web app (main menu for each part)
 * @returns 
 */
class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container px-5">
                    <NavLink to="/" className="navbar-brand">Hatchways</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink to="/part01" className="nav-link">Part 01</NavLink></li>
                        <li className="nav-item"><NavLink to="/part02" className="nav-link">Part 02</NavLink></li>
                        <li className="nav-item"><NavLink to="/part03" className="nav-link">Part 03</NavLink></li>
                        <li className="nav-item"><NavLink to="/part04" className="nav-link">Part 04</NavLink></li>
                        <li className="nav-item"><NavLink to="/part05" className="nav-link">Part 05</NavLink></li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;