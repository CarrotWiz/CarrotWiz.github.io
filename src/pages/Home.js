import React from 'react';
import './Home.css';
import ProfilePicture from '../components/ProfilePicture.js';
import Skills from '../pages/Skills.js';
import Projects from '../pages/Projects.js';
import ContactMe from '../pages/ContactMe.js';
import AboutMe from '../pages/AboutMe.js';
import CommonGG from '../projects/CommonGG.js';

function Home() {

    const name = "Nolan Song";
    const skills = ["a", "b", "c", "1", "2", "3"];
    const projects=[
        {
            name: "Common.gg",
            content: CommonGG()
        }
    ]


    return (
        <div className='container'>
            <div className='home'>
                <div className='header'>
                    {name}
                </div>
                <ProfilePicture />
                <AboutMe />
                <Projects projects={projects}/>
                <Skills skills={skills} />
                <ContactMe />
            </div>
        </div>
    )
}

export default Home
