import React from 'react';
import './Home.css';
import ProfilePicture from '../components/ProfilePicture.js';

function Home(props) {

    const name = "Nolan Song";
    const aboutMeText = "Hello, my name is Nolan Song. I'm a 3rd year Computer & Information Science major at The Ohio State University. I enjoy learning new things, especially related to coding and computer science. Currently, I am looking for internship opportunities during the Summer 2022 season.";
    const skills = ["a", "b", "c", "1", "2", "3"];

    const getSkills = (skills) => {
        return (
            <ul>
                {skills.map(function(skill, index){
                    return <li key={index}>{skill}</li>
                })}
            </ul>
        )
    }


    return (
        <div className='container'>
            <div className='home'>
                <div className='name'>
                    {name}
                </div>
                <ProfilePicture />
                <div className='aboutMe'>
                    {aboutMeText}
                </div>
                <div className='subheader'>
                    Skills
                </div>
                <div className='skills-box'>
                    {getSkills(skills)}
                </div>
            </div>
        </div>
    )
}

export default Home
