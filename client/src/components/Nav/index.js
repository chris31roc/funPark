import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Fun Park</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/">Search Parks</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved">Saved Parks</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;