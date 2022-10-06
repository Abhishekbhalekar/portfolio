import React, { useState } from 'react'
import './project.css'
import project from '../data/ProjectsData';
import Card from '../container/Card';
import './home.css'



const Project = () => {
  const [projects,setProjects] = useState(project)
  return (
   <main id='Project'>
     <div className='latest-project'>
     <h1 className='first-title'>Latest projects</h1>
     </div>
     <div className='grid-container'>
      {
         projects.map((project)=>{
           return(
               <div>
                 <Card key={project.id} {...project}/>
               </div>
                );
         })
       }
       </div>
   </main>
  )
}

export default Project;