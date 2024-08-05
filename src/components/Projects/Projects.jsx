import React from "react";
import './Projects.css';
import { PROJECTS } from '../../utils/data';
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <section className="projects-container">
            <h2>Projects</h2>
            <p>Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
            <div className="projects-content">
                {PROJECTS.map((item) => (
                    <ProjectCard
                        key={item.title}
                        id={item.id}
                        details={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;

