import React from 'react';
import Resume from '../files/Resume - Nolan Song.pdf';
import '../styles/ContactMe.css';

function ContactMe() {
    return (
        <>
            <div className='contact_me'>
                <div className='header'>
                    Contact Me
                </div>
                <ul className='links_ul'>
                    <li>Email: nsong2001@gmail.com</li>
                    <li>Phone: +1(513)760-0886</li>
                    <li>GitHub: <a href="https://github.com/CarrotWiz" target="_blank">CarrotWiz</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/nolan-song-160472192/" target="_blank">in/nolan-song-160472192/</a></li>
                    <li>Resume: <a href={Resume} download>Download</a></li>
                </ul>
            </div>
        </>
    )
}

export default ContactMe
