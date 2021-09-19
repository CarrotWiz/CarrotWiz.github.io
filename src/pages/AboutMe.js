import React from 'react';
import './AboutMe.css';
import ProfilePicture from '../components/ProfilePicture.js';

function AboutMe(props) {

    const aboutMeText = "Hello, my name is Nolan Song. I'm a 3rd year Computer & Information Science major at The Ohio State University. I enjoy learning new things, especially related to coding and computer science. Currently, I am looking for internship opportunities during the Summer 2022 season.";
    const skills = [];
    
    return (
        <div className='aboutme'>
            <div className='aboutme-container'>
                <div className='row-break' />
                <div className='title'>
                    About Me
                </div>
                <div className='row-break' />
                <ProfilePicture />
                <div className='row-break' />
                <p className='text1'>{aboutMeText}</p>
            </div>
        </div>
    )
}

export default AboutMe

