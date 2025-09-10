/**
 * Home: Landing page composing all site sections.
 * - Renders navbar, hero, and each content section (About, Gallery, etc.)
 * - Supports smooth in-page scrolling via refs or hash navigation
 * - Displays social links and profile image in the hero section
 */
import './styling/Home.css';
import profileImage from '../images/profile.jpg';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import components
import Navbar from "../components/Navbar";
import logo from "../images/logo.png";
import githubicon from "../images/github.png";
import linkedin_icon from "../images/linkedin.png"
import emailicon from "../images/email.png";

import Gallery from '../components/Gallery';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

function Home () {
    const location = useLocation();

    // Refs to each section
    const aboutRef = useRef(null);
    const galleryRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    // Helper: Scroll smoothly to a given section ref
    const scrollTo = (ref) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle anchor linking with #hash
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <nav>
                <div id="header">
                    <img id="logo-image" src={logo} alt="Logo"/>
                    <Navbar
                        scrollTo={scrollTo}
                        aboutRef={aboutRef}
                        galleryRef={galleryRef}
                        experienceRef={experienceRef}
                        educationRef={educationRef}
                        skillsRef={skillsRef}
                        projectsRef={projectsRef}
                        contactRef={contactRef}
                    />
                </div>
            </nav>

            <div id="homepage-div">
                <div id="elevator-div">
                    <div id="intro-div">
                        <h1 id="elevator-pitch">
                            <span id="one-line">Hi,</span><br/>
                            <span id="two-line-pt1">I'm</span><span id="two-line-pt2"> Brandon Wendell</span><br/>
                            <span id="three-line">Full-Stack Developer</span>
                        </h1>
                        {/* Quick scroll buttons to key sections */}
                        <div id="direct-buttons">
                            <button onClick={() => scrollTo(aboutRef)}>About Me</button>
                            <button onClick={() => scrollTo(contactRef)}>Contact</button>
                        </div>
                        <div>
                            <div className="social-links">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/brandoncw22">
                                    <img className="icon github elevator" src={githubicon} alt="Github Icon" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brandon-wendell">
                                    <img className="icon linkedin elevator" src={linkedin_icon} alt="linkedin icon" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="mailto:brandon.c.wendell@gmail.com">
                                    <img className="icon email elevator" src={emailicon} alt="email icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img className="profile-image" src={profileImage} alt="Profile"/>
                </div>

                <div id="about-div" ref={aboutRef}>
                    <h1 id="about-heading">🪪 About Me</h1>
                    <About />
                </div>

                <div id="gallery-div" ref={galleryRef}>
                    <h1 id="gallery-heading">🖼️ Gallery</h1>
                    <Gallery />
                </div>

                <div id="experience-div" ref={experienceRef}>
                    <h1 id="experience-heading">💼 Experience</h1>
                    <Experience />
                </div>

                <div id="education-div" ref={educationRef}>
                    <h1 id="education-heading">📖 Education</h1>
                    <Education />
                </div>

                <div id="skills-div" ref={skillsRef}>
                    <h1 id="skills-heading">💪 Skills & Abilities</h1>
                    <Skills />
                </div>

                <div id="projects-div" ref={projectsRef}>
                    <h1 id="projects-heading">🖥️ Projects</h1>
                    <Projects />
                </div>

                <div id="contact-div" ref={contactRef}>
                    <h1 id="contact-heading">✉︎ Contact Me</h1>
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Home;
