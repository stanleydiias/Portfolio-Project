import React from 'react'
import author from '../me.jpg'

const AboutMe = () => {
    return (
        <div className="aboute-me">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                            <img className="profile-img" src={author} alt="author..." />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">about me</h1>
                        <p >Hello! I am Stanley. I have been developing websites for over 5 years. I'm Full-Stack Web Developer. Technologies I use is MERN(JavaScript, ReactJS, BootStrap, Html5, Css3, NodeJS, Git e etc...) Graduated as a technologist in Mechatronics and studying Systems Analysis and Development, I am a professional who always seeks to reinvent himself and always overcome the challenges now presented. I have solid knowledge in systems analysis, development and maintenance, object orientation, design patterns, multilayer applications and software integration;
I try to improve myself and improve my knowledge, thus seeking to become a qualified professional and ready to give my best in any activity conceived to me. I am very creative, I am easy to learn and solve problems, I have ease of communication and coexistence between peers, always aiming to add and knowledge to meet the expectations that work with a focus on results and criteria management in order to achieve goals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
