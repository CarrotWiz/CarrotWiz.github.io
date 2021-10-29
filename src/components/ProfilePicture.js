import React from 'react';
import PFP from '../images/pfp.jpg';
import './ProfilePicture.css';

function ProfilePicture() {
    return (
        <div className='profilepicture'>
            <img className='picture' src={PFP} alt='Profile_Picture' />
        </div>
    )
}

export default ProfilePicture

