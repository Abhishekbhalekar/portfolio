import React from 'react'
import './home.css'
import handimg from '../Images/top.png'
import github from '../Images/github.png'
import linkedin from '../Images/linkdin.svg'
import twitter from '../Images/twitter.png'
import resume from '../Images/Vector.png'
import cv from '../data/resume.pdf'



const home = () => {
  return (
    <div className='center-text' id='home'>
        <div className='home-first-txt'>
        <h1 className='first-title'>I'M Abhishek Bhalekar</h1>
        <p className='home-para'><span className='home-para-color'>Web Developer and Software Developer,</span>
       from Pune,Maharstra I make Web Application </p>
        <div className='home-list'>
        <ul className='nav-list home-list-p'>
            <li><a href='https://github.com/Abhishekbhalekar'><img src={github} /></a></li>
            <li><a href='https://www.linkedin.com/in/abhishek-bhalekar-5072821a2/'><img src={linkedin} /></a></li>
            <li><a href='https://twitter.com/Abhishek14532'><img src={twitter} /></a></li>
                <ul className='download-list'>
                    <li className='last-element-nav'><img src={resume}/></li>
                    <li><a href={cv} download><span className='download-cv'>Download cv</span></a></li>
                </ul>
        </ul>
      </div>
        </div>
        <div className='home-hand'>
            <div className='upper-hand'>
              <img src={handimg} className='responsive-img'/>
            </div>
        </div>
    </div>
  )
}

export default home;