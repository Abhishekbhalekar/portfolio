import React from 'react'
import '../components/project.css';
import code from '../Images/code.svg';
import tic from '../Images/tic.svg';
import '../components/project.css';
import '../components/home.css';


const Card = ({name,image,text,usedTech,codee,demmo,demo}) => {
  return (
      <>
      <div className='enter' >
      <div>
      <div className='imga'>
           <img src={image} alt="img" className='responsive-img'/>
         </div>
         <div>
           <h1>{name}</h1>
           <div className='tech-use'>
             <ul className='row'>
               
               {
               usedTech.map((value)=>{
                  return<li key={value}><button className='skill-btn'>{value}</button></li>
                })
               }
               
             </ul>
           </div>
           <div className='para'>
             <p>{text}</p>
           </div>
           <div>
             <ul className='row'>
               <ul className='row first-ul download-cv'>
                 <li><img src={code} alt="code"/></li>
                 <li><a href={codee}>code</a></li>
               </ul>
               <ul className='row download-cv'>
                 <li><img src={tic}  alt="check"/></li>
                 <li><a href={demmo}>{demo}</a></li>
               </ul>
             </ul>
           </div>
         </div>
         </div>
         </div>
      </>
  )
}

export default Card