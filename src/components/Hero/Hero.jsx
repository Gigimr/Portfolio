import React from 'react'
import './Hero.css'

const Hero = ({ elRef }) => {
    return (<>
        <section ref={elRef} className='hero-container'>
            <div className='hero-content'>
                <h2>Building Digital Experiences That Inspire</h2>
                <p>Passionate FullStack Developer | Transforming Ideas into Seamless and
                    Visually Stunning Web Solutions
                </p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/js.png' alt='' />

                    </div>
                    <img src='./assets/images/logo.png' alt='' />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/react-icon.png' alt='' />
                    </div>
                    <div className='tech-icon'>
                        <img src='./assets/images/html.png' alt='' />
                    </div>
                    <div className='tech-icon'>
                        <img src='./assets/images/css.png' alt='' />
                    </div>

                </div>
            </div>

        </section>
    </>

    )
}

export default Hero