import './styling/Home.css';
import profileImage from '../images/profile.jpg';
import { Navigate, useNavigate } from "react-router-dom";
import Gallery from '../components/Gallery';

function Home () {
    const navigate = useNavigate();

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
                <h1 id="gallery-heading">My Gallery</h1>
                <Gallery />
            </div>
            <div id="experience-preview">
                <h1 id="experience-heading">My Experience</h1>

            </div>
        </div>
    );
}

export default Home;