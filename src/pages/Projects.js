import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard.js';
import CommonGGImg from '../images/commongg image.PNG';
import DiscToBrailleImg from '../images/disctobraille image.PNG';

function Projects(props) {
    let commongg = {
        name: "Common.gg",
        src: CommonGGImg,
        description: "Common.gg is a social-media site for the TeamFight Tactics community. I worked alongside 3 other engineers in a team of 10 to develop this site, personally focusing on front-end tasks.",
        link: "https://common.gg/",
        skills: "Javascript, React, HTML5, CSS3, Bootstrap, Firebase"
    }
    let disctobraille = {
        name: "Discord to Braille",
        src: DiscToBrailleImg,
        description: "Hackathon project that displays messages from a Discord channel in braille using an Arduino with an LED display. Can also type messages to Discord using 8 keys that represent a braille keyboard.",
        link: "https://github.com/CarrotWiz/DiscordWithBraille",
        skills: "Python, C++, Arduino"
    }
    return (
        <>
            <div className='projects'>
                <div className='header'>
                    Projects
                </div>
                <div className='projects_container'>
                    <ProjectCard project={commongg} />
                    <ProjectCard project={disctobraille} />
                </div>
            </div>
        </>
    )
}

export default Projects