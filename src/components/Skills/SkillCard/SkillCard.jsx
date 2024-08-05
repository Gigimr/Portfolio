import React from "react";
import { Tilt } from 'react-tilt';
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <Tilt options={{ scale: 1 }}>
            <div
                className={`skills-card ${isActive ? 'active' : ''}`}
                onClick={() => onClick()} >

                <div className="skill-icon">
                    <img src={iconUrl} alt={title} />
                </div>
                <span>{title}</span>
            </div>
        </Tilt>
    )
};

export default SkillCard;
