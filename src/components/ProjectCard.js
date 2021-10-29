import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard(props) {
    return (
        <div className='container'>
            <div className='project_card'>
                <a href={props.project.link} target='_blank'>
                    <div className='project_title'>
                        {props.project.name}
                    </div>
                    <div className='project_image_container'>
                        <img className='project_image' src={props.project.src} alt={props.project.name + " image"} />
                    </div>
                </a>
                <div className='project_body'>
                    {props.project.description}
                </div>
                <div className='project_skills'>
                    Skills: {props.project.skills}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

