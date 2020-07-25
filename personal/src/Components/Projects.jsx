import React from 'react';
import ProjectCard from './ProjectCard'
import '../App.css';
import imgAssets from "../assets"

const projects = [
    {
        name: "MapScout",
        description: "Customizable, expandable, and filterable interactive resource map that connects patients with behavioral health services.",
        image: imgAssets.pacts,
        skills: ["react", "firebase"],
    },
    {
        name: "Password Umbrella",
        description: "Secure and user friendly password manager to prevent corporate credential leaks from third party data breaches",
        image: imgAssets.pacts,
        skills: ["node", "express"],
    },
    {
        name: "Selfie Per Day",
        description: "Nostalgia inducing timelapse generator that aligns a collection of selfies at the eye-level using OpenCV",
        image: imgAssets.pacts,
        skills: ["opencv", "python"],
    },
    {
        name: "TreeCombinator",
        description: "Essential tool for evolutionary biologists wishing to view multiple protein evolution history in one look.",
        image: imgAssets.pacts,
        skills: ["python"],
    },
    {
        name: "CellTagger",
        description: "Solution to reduce texting while driving and incentivizing good drivers using a dashcam with cell phone detection.",
        image: imgAssets.pacts,
        skills: ["react", "firebase"],
    },
    {
        name: "sqlsmith.py",
        description: "Random query generator for MySQL, PostgreSQL, and MonetDB for database fuzzing",
        image: imgAssets.pacts,
        skills: ["opencv", "python"],
    },
    
]

const Projects = (props) => {
  return (
    <div ref={props.divRef}>
        <div className="projects title">
            <h3 className="titleText"> Projects </h3>
        </div>
        <img src={imgAssets.pacts}/>
        <div className="projectArea">
            {projects.map(project => {
                    return (
                        <ProjectCard image={project.image} name={project.name} description={project.description}/>
                    )
                })}
        </div>
    </div>
  );
}

export default Projects;
