import './styling/Home.css';
import profileImage from '../images/profile.jpg';
import { Navigate, useNavigate } from "react-router-dom";
import Gallery from '../components/Gallery';
import Experience from '../components/Experience'
import Education from '../components/Education';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Home () {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return(
        <div id="homepage-div">
            <div id="elevator-div">
                <div id="intro-div">
                    <h1 id="elevator-pitch">
                        <span id="one-line" >Hi,</span><br/>
                        <span id="two-line-pt1">I'm</span><span id="two-line-pt2"> Brandon Wendell</span><br/>
                        <span id="three-line">Full-Stack Developer</span>
                    </h1>
                    <div id="direct-buttons">
                        <button onClick={() => navigate("/about")}>About Me</button>
                        <button onClick={() => navigate("/contact")}>Contact</button>
                    </div>
                    <div id="media-buttons">

                    </div>
                </div>
                <img className="profile-image" src={profileImage} alt="Profile"/>
            </div>

            <div id="gallery-div">
                <h1 id="gallery-heading">🖼️ Gallery</h1>
                <Gallery />
            </div>

            <div id="experience-div">
                <h1 id="experience-heading">💼 Experience</h1>
                <Experience />
            </div>

            <div id="education-div">
                <h1 id="education-heading">📖 Education</h1>
                <Education />
            </div>

            <div id="skills-div">
                <h1 id="skills-heading">💪 Skills & Abilities</h1>
            </div>

            <div id="projects-div">
                <h1 id="projects-heading">🖥️ Projects</h1>
            </div>
        </div>
    );
}

export default Home;