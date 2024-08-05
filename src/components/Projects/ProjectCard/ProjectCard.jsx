import React from "react";
import { Tilt } from 'react-tilt';
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
    return (
        <Tilt className="projectCardTilt" options={{ max: 25, scale: 1.05 }}>
            <div className="Tilt-inner projectCard">
                <a href={details.demo}>
                    <img src={details.imgUrl} alt="img" />
                </a>

                <div className="projectCard-content">
                    <h3>{details.title}</h3>
                    <p>{details.description}</p>
                    <ul>
                        {details.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <div className="projectCard-links">
                        <a href={details.source}>Source</a>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;

