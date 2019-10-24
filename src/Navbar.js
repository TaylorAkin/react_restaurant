import React from 'react';







function Navbar() {


   


    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <button className="navbar-toggler navbar-toggler-icon h3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" />

            <a className="navbar-brand mr-5 h1" href="#about">Stellas</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-end">
                    <li className="nav-item active">
                        <a className="nav-link h3" href="#about">Hours & Location <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link dropdown-toggle h3" href="#about" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menus</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#breakfast">Breakfast</a>
                            <a className="dropdown-item" href="#lunch">Lunch</a>
                            <a className="dropdown-item" href="#appetizers">Appetizers</a>
                            <a className="dropdown-item" href="#dinner">Dinner</a>
                            <a className="dropdown-item" href="#dessert">Dessert</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link h3" href="#about" tabIndex="-1">Private Dining</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link h3" href="#about" tabIndex="-1">About Stellas</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;