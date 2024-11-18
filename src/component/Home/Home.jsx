import React from 'react'
import HeroImage from '../../assets/hero-image.webp'
import { Link } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import FlyingStars from '../FlyingStars/FlyingStars'

export default function Home() {
  return (
    <div className=' bg-black'>
       <FlyingStars/>
 <div className="bg-black text-white text-center py-16 relative z-20" data-aos="zoom-in-up">
  <div className="relative w-full max-w-[600px] mx-auto">
    {/* الصورة */}
    <img 
      src={HeroImage} 
      alt="Hero" 
      className="mx-auto w-full h-auto rounded-lg shadow-lg"
    />

    {/* النصوص فوق الصورة */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-gradient-logo bg-clip-text">
          Mohamad Alkak
        </span>
      </h1>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-transparent bg-gradient-logo bg-clip-text">
        Full Stack Developer
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 max-w-xl">
        I specialize in building modern and full stack applications.
      </p>

      {/* الأزرار */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="https://drive.google.com/file/d/16LHy6ayD0o-hGMvuKZmcn8l4_lmhZyHA/view"
          target="_blank"
        >
          <button className="relative inline-block px-6 py-3 text-lg font-medium tracking-wide text-white bg-transparent border-2 border-[#725AC1] rounded-lg shadow-inner transition-all duration-500 hover:text-white hover:shadow-[inset_0_-100px_0_0] hover:shadow-[#725AC1] active:scale-90">
            View My CV Here!
          </button>
        </Link>

        <a href="#contact">
          <button className="relative inline-block px-6 py-3 text-lg font-medium tracking-wide text-black bg-gray-200 border-2 border-transparent rounded-lg shadow-inner transition-all duration-500 hover:text-white hover:shadow-[inset_0_-100px_0_0] hover:shadow-[#725AC1] active:scale-90">
            View Projects
          </button>
        </a>
      </div>
    </div>
  </div>
</div>
<About/>
<Skills/>
<Project/>
<Contact/>
    </div>
  )
}
