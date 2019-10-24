import React from 'react';
import './Navbar.css'






function Navbar() {


   


    return (
        <nav className="navbar navbar-expand-sm navbar-dark justify-content-center fixed-top" id = "navbar">
            <button className="navbar-toggler navbar-toggler-icon h3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" />

            <a className="navbar-brand mx-5" href="#">Stellas</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-end">
                    <li className="nav-item active">
                        <a className="nav-link h3 mx-5" href="#about">Hours & Location <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle h3 mx-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">Menus</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#breakfast">Breakfast</a>
                            <a className="dropdown-item" href="#lunch">Lunch</a>
                            <a className="dropdown-item" href="#appetizers">Appetizers</a>
                            <a className="dropdown-item" href="#dinner">Dinner</a>
                            <a className="dropdown-item" href="#dessert">Dessert</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link h3 mx-5" href="#about" tabIndex="-1">Private Dining</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link h3 mx-5" href="#about" tabIndex="-1">About Stellas</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;