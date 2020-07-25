import React from 'react';
import '../App.css';


const ProjectCard = (props) => {

    return (
        <div className="projectCard">
            <p style={{fontSize:"calc(10px + 2vmin)"}}>{props.name}</p>
            <div className="projectImg">
                <img source={props.image}/>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectCard;