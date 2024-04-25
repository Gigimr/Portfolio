import React, { useRef } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';


function App() {
  const sections = {
    hero: useRef(),
    skills: useRef(),
    work: useRef(),
    projects: useRef(),
    contact: useRef(),
  };


  const scrollToRef = (ref) => {
    const isHero = ref.current.className === "hero-container"
    ref.current.scrollIntoView({ behavior: 'smooth', block: isHero ? 'center' : 'start' });

  };

  return (
    <>
      <Navbar
        scrollToRef={scrollToRef}
        sections={sections}
      />
      <div className='container'>
        <Hero elRef={sections.hero} />
        <div ref={sections.skills} style={{ position: 'relative', bottom: 30 }} />
        <Skills />
        <div ref={sections.work} style={{ position: 'relative', bottom: 90 }} />
        <WorkExperience />
        <div ref={sections.projects} style={{ position: 'relative', bottom: 90 }} />
        <Projects />
        <div ref={sections.contact} style={{ position: 'relative', bottom: 110 }} />
        <ContactMe />
      </div>
      <footer></footer>

    </>
  );
}

export default App;
