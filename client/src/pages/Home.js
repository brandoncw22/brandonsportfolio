import './styling/Home.css';
import profileImage from '../images/profile.jpg';
import { Navigate, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home () {
    const navigate = useNavigate();
    const [gallery, setGallery] = useState([]);
    useEffect(async () => {
        const res = await axios.get('http://localhost:4000/')
    }, []);


    return(
        <div id="homepage-div">
            <div id="elevator-div">
                <div id="intro-div">
                    <h1>
                        Hi,<br/>
                        I'm Brandon Wendell<br/>
                        A Full-Stack Developer
                    </h1>
                    <div id="direct-buttons">
                        <button onClick={() => navigate("/about")}>About Me</button>
                        <button onClick={() => navigate("/contact")}>Contact</button>
                    </div>
                </div>
                <img className="profile-image" src={profileImage} alt="Profile"/>
            </div>
            <div id="gallery-div">
                <ImageGallery items={gallery}/>
            </div>
        </div>
        
        
    );
}

export default Home;