import React from 'react';
import { Tilt } from 'react-tilt';
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
  const { title, imgUrl, description, skills, source, demo } = details;
  const [showMore, setShowMore] = React.useState(description.length > 55);
  return (
    <Tilt className="projectCardTilt" options={{ max: 25, scale: 1.05 }}>
      <div className={`Tilt-inner projectCard`}>
        <a href={demo}>
          <img className="projectCard-img" src={imgUrl} alt="img" />
        </a>

        <div
          className={`projectCard-content ${
            !showMore ? 'projectCard-content-full' : 'projectCard-content-hide'
          }  `}>
            <div className='projectCard-title-container'>
          <h3>{title} 
          </h3>
          <div className="gitContainer">
          <img
            className='gitIcon'
            src='../assets/images/git.svg'
            alt="GitHub Icon"
            onClick={() => window.open(source, '_blank')}
          />
        </div>
        </div>
          <>
            <p
              className={`projectCard-content-description ${
                !showMore ? 'description-full ' : 'description-hide '
              } `}>
              {description}
            </p>
          </>
          <div className='skillsDetail'>
            {skills.map((skill, index) => (
              <p key={index}>#{skill}</p>
            ))}
          </div>
          {/* <div className="projectCard-links">
            <a href={source}>Preview</a>
          </div> */}
           {showMore ? (
          <div className="showMore" onClick={() => setShowMore(!showMore)}>
            showMore
          </div>
        ) : null}
        </div>
       
      </div>
    </Tilt>
  );
};

export default ProjectCard;
