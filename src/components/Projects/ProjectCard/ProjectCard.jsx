import React from "react";
import './ProjectCard.css'

const ProjectCard = ({ details }) => {
    return (
        <div className="projectCard">
            <a href={details.demo}>
                <img src={details.imgUrl} alt="img" />
            </a>

            <h3>{details.title}</h3>
            <p>{details.description}</p>
            <ul>
                {details.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <div>
                <a href={details.source}>Source</a>
            </div>
        </div>
    )
};

export default ProjectCard;
