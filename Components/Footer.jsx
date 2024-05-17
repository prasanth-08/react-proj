import React from "react";
import { Link } from 'react-router-dom';
import foot from '../Assets/image/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPersonGear } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Footer(){
    return(
        <>

<div className='footer-one'>
        <div>
          <img src={foot} alt="" />
          <p>Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. <br />
            Delectus autem, </p>
          <p><BsPersonGear/>
            <FaGithub className="icon"/>
            <FaLinkedinIn className="icon"/>
            <FaInstagram className="icon"/></p>
        </div>
        <div>
          <h4>Discover</h4>
          <Link className="nav-link active" aria-current="page" to="/">Home</Link><br />
          <Link className="nav-link" to="/">About</Link><br />
          <Link className="nav-link" to="/Tour">Tours</Link>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Gallery</p>
          <p>Login</p>
          <p>Register</p>

        </div>
        <div>
          <h4>Contact</h4>
          <p> <CiLocationOn id="colors"/> Address:Kuppam ,Andhra Pradesh</p>
          <p> <MdOutlineEmail id="colors"/> Email:mprasanthreddy147@gmail.com</p>
          <p> <CiPhone id="colors"/> Phone:7997578220</p>


        </div>
      </div>

      <footer>
        <hr />
        <p id='own'>Copyright 2024,Design and develop by <span id='my-name'>Prasanth</span>,All rights reserved.</p>
      </footer>

        
        </>
    )
}


export default Footer;