import React from 'react';
import ProfilePicture from '../components/ProfilePicture.js';
import '../styles/Home.css';

function Home() {

    const name = "Nolan Song";

    return (
        <div className='home'>
            <div className='header'>
                {name}
            </div>
            <div className='profile_picture'>
                <ProfilePicture />
            </div>
            <div className='about_me'>
                <p>Hello, my name is Nolan Song. I am a 3rd year Computer & Information Science major at the Ohio State University, expecting to graduate in May of 2023. Currently, I am looking for internship opportunities during the Summer 2022 season.</p>
                <p>I have been coding for 6-7 years now, constantly learning new environments and honing my problem solving skills. As far as recent experiences go, I have been focusing on improving my front-end skills but am open to opportunities in front-end, back-end, and full-stack.</p>
                <p>If I could describe my personality in three words it would be logical, empathetic, and diligent. I am a quick learner, a great teammate, and always eager to contribute.</p>
                <p>During my spare time, I enjoy playing video games and reading fictional books/manga. I also enjoy solving puzzles such as crosswords and Sudoku.</p>
            </div>
        </div>
    )
}

export default Home
