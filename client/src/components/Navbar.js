import { Link, useLocation } from "react-router-dom";
import './styling/Navbar.css';

function Navbar () {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <nav>
            <div id="navbar-div">
                <ul id="navbar">
                    <li className="navbar-link"><Link to="/">Home</Link></li>
                    <li className="navbar-link">
                        {isHome ? (
                            <a href="#gallery-div">Gallery</a>
                        ) : (
                            <Link to="/#gallery-div">Gallery</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <a href="#experience-div">Experience</a>
                        ) : (
                            <Link to="/#experience-div">Experience</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <a href="#skills-div">Education</a>
                        ) : (
                            <Link to="/#skills-div">Education</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <a href="#education-div">Skills</a>
                        ) : (
                            <Link to="/#education-div">Skills</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <a href="#projects-div">Projects</a>
                        ) : (
                            <Link to="/#projects-div">Projects</Link>
                        )}
                    </li>
                    <li className="navbar-link"><Link to="/about">About</Link></li>
                    <li className="navbar-link-1"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;