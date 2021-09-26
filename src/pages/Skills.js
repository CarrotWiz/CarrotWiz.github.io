import React from 'react';
import './Skills.css';

function Skills(props) {

    const getSkills = (skills) => {
        return (
            <ul className='skills-ul'>
                {skills.map(function(skill, index){
                    return <li key={index}>{skill}</li>
                })}
            </ul>
        )
    }

    return (
        <>
            <div className='subheader'>
                Skills
            </div>
            <div className='skills-box'>
                {getSkills(props.skills)}
            </div>
        </>
    )
}

export default Skills