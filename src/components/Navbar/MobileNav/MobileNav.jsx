import React from "react";
import './MobileNav.css'
import resume from "../../../utils/ginelie-mora-resume.pdf"

const MobileNav = ({ isOpen, toggleMenu, sections, scrollToRef }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <ul>
                        <li>
                            <div className="menu-item" onClick={() =>
                                scrollToRef(sections.hero)
                            }>Home</div>
                        </li>
                        <li>
                            <div className="menu-item" onClick={() =>
                                scrollToRef(sections.skills)
                            }>Skills</div>
                        </li>
                        <li>
                            <div className="menu-item" onClick={() =>
                                scrollToRef(sections.work)
                            }>Work Experience</div>
                        </li>
                        <li>
                            <div className="menu-item" onClick={() =>
                                scrollToRef(sections.projects)
                            }>Projects</div>
                        </li>
                        <li>
                            <div className="menu-item" onClick={() =>
                                scrollToRef(sections.contact)
                            }>Contact Me</div>
                        </li>
                        <a className='a-tag' href={resume} download='Resume' target="_blank" >
                            <button className="contact-btn" onClick={() => { }}>
                                Resume
                            </button>
                        </a>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default MobileNav