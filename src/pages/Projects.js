import React from 'react';
import './Projects.css';
import Collapsible from '../components/Collapsible.js';

function Projects(props) {

    const getProjects = (projects) => {
        return (
            projects.map(function(project, index){
                return <Collapsible name={project.name} content={project.content} key={index}/>
            })
        )
    }

    return (
        <>
            <div className='subheader a'>
                Projects
            </div>
            <div className='projects-box'>
                {getProjects(props.projects)}
            </div>
        </>
    )
}

export default Projects