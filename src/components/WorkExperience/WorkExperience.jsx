import React, { useRef } from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content">
        {WORK_EXPERIENCE.length > 1 ? (
          <>
            <div className="arrow-right" onClick={slideRight}>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
              <span className="material-symbols-outlined">chevron_left</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {WORK_EXPERIENCE.map((item, idx) => (
                <ExperienceCard key={item.title} details={item} />
              ))}
            </Slider>
          </>
        ) : (
          WORK_EXPERIENCE.map((item, idx) => (
            <ExperienceCard key={item.title} details={item} />
          ))
        )}
      </div>
    </section>
  );
};

export default WorkExperience;
