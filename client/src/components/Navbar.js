import { Link } from "react-router-dom";
import './styling/Navbar.css';

function Navbar () {
    return(
        <nav>
            <div id="navbar-div">
                <ul id="navbar">
                    <li className="navbar-link"><Link to="/">Home</Link></li>
                    <li className="navbar-link"><Link to="/about">About</Link></li>
                    <li className="navbar-link"><Link to="/projects">Projects</Link></li>
                    <li className="navbar-link"><Link to="/contact">contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;