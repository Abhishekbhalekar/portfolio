import React from 'react'
import './about.css';
import './project.css'
import profile from '../Images/p-img.jpg'
import sign from '../Images/sign.png'



const About = () => {
  const skills =['html','css','bootstrap','javascript','react-js','Core Java','SQL','github'];

  return (
      <section id='About'>
         <div className='About-title'>
           <h1 className='first-title'>About me</h1>
         </div>
        <div className='grid-container'>
            <div className='box-1'>
              <img src={profile} alt='profile-img' className='profile-img'/>
            </div>
            <div className='about-para'>
              <div className='text-prar'>
                <h1 className='nice-meet'>Nice to meet you,</h1>
                <h1 className='name-about'>I am Abhishek Bhalekar</h1>
                <p>
                Looking for a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.
                </p>
                <h1>Code, Design, Learn and Teach.</h1>
                <p>I enjoy taking complex problems and turning them into simple and beautiful interface.I also love the logic and structure of coding and always strive to write elegant and effective code</p>
                <img src={sign} />
              </div>
            </div>
        </div>
        <div className='skills-about'>
        <div className='about-para'>
        <h1 className='nice-meet'>My Skills includes but not limited</h1>
        <div className='tech-use'>
             <ul className='row'>
               
               {
               skills.map((value)=>{
                  return<li key={value}><button className='skill-btn'>{value}</button></li>
                })
               }
               
             </ul>
           </div>
        </div>
        </div>
    </section>
    
  )
}

export default About