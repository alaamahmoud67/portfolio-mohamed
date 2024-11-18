import React from 'react'
import Lottie from "lottie-react";
import Anima from '../../assets/about.json'
import Photo3 from "../../assets/Photo3.jpg";
import Photofrom2 from "../../assets/Photofrom2.jpg";
import Photofrom from "../../assets/Photofrom.jpg";
export default function About() {
    const projects = [
        {
          id: 1,
          technologies: "MERN Stack",
          image: Photo3,
          github: "https://drive.google.com/file/d/14-wHNys7fJrHuQ1pNRqvxIYH3WoeZeu8/view",
        },
        {
          id: 2,
        
          technologies: "MERN Stack",
          image: Photofrom2,
          github: "https://drive.google.com/file/d/143PyS0emmnuz1OeouhEuUXzxzsH2ngA3/view",
        },
        {
          id: 3,
         
          technologies: "MERN Stack",
          image: Photofrom,
          github: "https://drive.google.com/file/d/13xN3MMMJzDpB2dUv9i0lP-TTg3XwHHEi/view",
        },
        
      ];
      
  return (
    <>
     <div className="bg-black text-white py-20" >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="flex-1">
            <h2 className="text-[2rem] md:text-5xl lg:text-2xl    font-bold mt-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-7">Who I am?</h2>
            <p className="text-lg mb-8">
            My name is mohamad. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
            </p>
            
          </div>

          <div className='flex-1 w-full'>
          <Lottie 
    animationData={Anima}/>
          </div>
  
          
        </div>
      </div>
    </div>
    <div className='py-5'>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#080914] border border-[#725AC1] p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">view</a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
