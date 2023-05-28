import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin,FaInstagram} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//web.facebook.com/muhmmad.abbas.5055" target='_blank' className='nav-link'><FaFacebook /></Link></li>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/abdullah-shah-b1a691260/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/abdullah4-web" target='_blank' className='nav-link'><BsGithub /></Link></li>
         <li onClick={handleNav} ><Link  to="//instagram.com/abdullahshah587?igshid=ZDdkNTZiNTM=" target='_blank' className='nav-link'><FaInstagram /></Link></li> 
        <li onClick={handleNav} ><Link  to="//mailto:sadiquiabdullah4@gmial.com" target='_blank' className='nav-link'><BiEnvelope /></Link></li>
  </ul>
  )
};

export default NavLinks;
