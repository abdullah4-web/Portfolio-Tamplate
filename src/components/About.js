import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/pro.png';

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hello I am Abdullah Shah .I am currently a freshmen of Full Stack Web Developer. I am currently in the process of furthering expanding my skills in React JS and Node Js. My Two main strengths are FrontEnd, BackEnd programming . I am incredibly passionate about programming and expanding my career to become a Full Stack Developer. I am looking forward to gaining more experience as a leader and a student. I am attending events that will allow me to further comprehend how to advance my career in the ever growing tech world.

                      </p>
                        <br />
                        <p> I’ve had the privilege of working with some experienced professionals which has enhanced my skills and rate of learning. My main focus these days is building accessible, inclusive products and digital experiences, as well as creating designs and illustrations. With my experience I have what it takes to solve real world problems</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
