import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";
import resume from "../../utils/ginelie-mora-resume.pdf"

const Navbar = ({ sections, scrollToRef }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} sections={sections}
                scrollToRef={scrollToRef} />
            <nav className="nav-wrapper">
                <div className="nav-content">
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
                                scrollToRef(sections.projects)}>Projects</div>
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
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '1.8rem' }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>

                </div>
            </nav>

        </>
    )
}

export default Navbar;