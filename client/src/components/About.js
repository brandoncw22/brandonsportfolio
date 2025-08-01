import React from 'react';
import './styling/About.css'
import AboutIMG from '../images/about-image.jpg'

function About (){
    return(
        <div id="about-box">
            <img id="about-img" src={AboutIMG} alt='About Image' />
            <p id="about-paragraph">
                I’m a senior Computer Science student at Cleveland State University 
                with a strong passion for full-stack development and software 
                engineering. While I enjoy exploring a variety of 
                programming disciplines, my true enthusiasm lies in web development. 
                I work extensively with technologies like React, Express, Node.js, 
                and SQLite to create dynamic, user-focused applications. 
                One of my favorite projects was a custom blog application I 
                built for my girlfriend, which allowed me to combine both 
                technical problem-solving and thoughtful user experience design. 
                I look forward to continuing to grow as a developer and creating 
                impactful, polished applications.
            </p>
        </div>
    );

}
export default About;