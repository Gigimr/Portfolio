import React from "react";
import { Tilt } from 'react-tilt';
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
    const { title, imgUrl, description, skills, source, demo } = details;
    const [showMore, setShowMore] = React.useState(description.length > 55)
    return (
        <Tilt className="projectCardTilt" options={{ max: 25, scale: 1.05 }}>
            <div className={`Tilt-inner projectCard`}>
                <a href={demo}>
                    <img className="projectCard-img" src={imgUrl} alt="img" />
                </a>

                <div className={`projectCard-content ${!showMore ? 'projectCard-content-full' : 'projectCard-content-hide'}  `}>
                    <h3>{title}</h3>
                    <>
                        <p className={`projectCard-content-description ${!showMore ? 'description-full ' : 'description-hide '} `}> {description}</p>
                    </>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <div className="projectCard-links">
                        <a href={source}>Preview</a>
                    </div>

                </div>
                {showMore ? <div className="showMore" onClick={() => setShowMore(!showMore)}>
                    showMore
                </div> : null}
            </div>
        </Tilt >
    );
};

export default ProjectCard;

