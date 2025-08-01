import { Link, useLocation } from "react-router-dom";
import './styling/Navbar.css';

function Navbar({ scrollTo, aboutRef, galleryRef, experienceRef, educationRef, skillsRef, projectsRef, contactRef }) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <nav>
            <div id="navbar-div">
                <ul id="navbar">
                    <li className="navbar-link"><Link to="/">Home</Link></li>

                    <li className="navbar-link">
                        {isHome ? (
                            <button onClick={() => scrollTo(aboutRef)}>About</button>
                        ) : (
                            <Link to="/#about-div">About</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <button onClick={() => scrollTo(galleryRef)}>Gallery</button>
                        ) : (
                            <Link to="/#gallery-div">Gallery</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <button onClick={() => scrollTo(experienceRef)}>Experience</button>
                        ) : (
                            <Link to="/#experience-div">Experience</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <button onClick={() => scrollTo(educationRef)}>Education</button>
                        ) : (
                            <Link to="/#education-div">Education</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <button onClick={() => scrollTo(skillsRef)}>Skills</button>
                        ) : (
                            <Link to="/#skills-div">Skills</Link>
                        )}
                    </li>
                    <li className="navbar-link">
                        {isHome ? (
                            <button onClick={() => scrollTo(projectsRef)}>Projects</button>
                        ) : (
                            <Link to="/#projects-div">Projects</Link>
                        )}
                    </li>
                    <li className="navbar-link-1">
                        {isHome ? (
                            <button onClick={() => scrollTo(contactRef)}>Contact</button>
                        ) : (
                            <Link to="/#contact-div">Contact</Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
