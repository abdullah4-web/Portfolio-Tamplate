import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";
import {FaNodeJs} from "react-icons/fa"

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>FrontEnd Web Desinging</p>
                        <p className='services-desc'>I use various web technologies to develop attractive,creative, interactive, responsive and functional website layouts. </p>
                    </div>
                    <div className="services-card">
                        <FaNodeJs className='services-icon' />
                        <p className='services-title'>BackEnd Web Developing</p>
                        <p className='services-desc'>I work with BackEnd programming for dyanamic Functionality and I Use Node Js technologies and accessible and usable products which aid business growth.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
