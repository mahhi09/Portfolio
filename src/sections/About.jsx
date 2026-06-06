import React from 'react';
import { motion } from 'framer-motion';
import Profile from "../assets/Profile.png";
import { div } from 'framer-motion/client';
import { init } from '@emailjs/browser';
 
 export default function About() {
  const starts = [
      {label : "Exprience" , value : "1+ years"},
      {label : "Specility" , value : "FullStack"},
      {label : "Focus" , value : "Penetretion Testing"},
      
  ]
  
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px] ",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[220px] opacity-10 blur-[180px] delay-500",
  ]
 
   return (
    <section id="about"
    className="min-h-[screen] w-full flex justify-center items-center relative bg-black text-white overflow-hidden">

    <div className="absolute inset-0 pointer-events-none ">
      {glows.map((c,i ) => (
        <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`  }/>
      ))}
    </div>

    <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-35 py-10 flex flex-col gap-12 ">
      <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 "
      initial={{opacity:0, y:24}}
      whileInView={{opacity: 1 , y:0}}
      transition={{duration:0.8}}
      viewport={{once:false, amount:0.4}}>

      <motion.div className="relative w-[160px] h-[260px] md:w-[200px] md:h-[200px] 
      rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20  shadow-[#1cd8d2]/25"
      whileHover={{scale:1.02 }}
      transition={{type:"spring" , stiffness:200 , damping:80}}>
         <img src={Profile} alt="Mahhi" 
         className="absolute inset-0 w-full h-full"/>
      </motion.div>

      <div className="flex flex-1 flex-col justify-center text-center md:text-left ">
        <h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
         bg-gradient-to-br from-[#6f0a83] via-[#21deff] to-[#1cd8d2] mb-2'>
          Mayank Dandare
        </h2>
        <p className='mt-1 text-lg sm:text-xl text-white/90 font-semibold'>
          FullStack Devloper
        </p>
        <p className="mt-2 text-gray-300 leading-relaxed text-base sm:text-[15px] max-w-2xl md:max-w-2xl ">
          I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans Java, React, Next.js, TypeScript, Tailwind CSS, and FastAPI—bringing ideas to life from concept to production with robust APIs and smooth interfaces.
        </p>

        <div className='mt-6 grid grid-cols-3 ms:grid-col-3 gap-3 sm:gap-4 max-w-xl'>
          {starts.map((item , i )=> (
            <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center "
            initial={{opacity: 0 , y: 12 }}
            whileInView={{opacity: 1 , y : 1}}
            transition={{delay: 0.05 * i , duration:0.4}}
            viewport={{once:"false" , amount:0.3}}>

              <div className="text-sm text-gray-400">{item.label}</div>
              <div className='text-base font-semibold'>{item.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <a href="#projects" className='inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition'>View Project</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition">Get in Touch</a>
        </div>


      </div>

      </motion.div>

      <motion.div className="text-center md:text-left "
      initial={{opacity:0 , x: -30}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.6}}
      viewport={{once: false , amount: 0.4}}>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 " >
          About Me
        </h3>
        <p className='text-gray-300 leading-relaxed text-base sm:text-lg sm:text-lg '>
          I’m a Software Developer, Content Creator, and Web Developer — passionate about building fast, resilient applications and sharing coding insights on Instagram and YouTube.
        </p>

        <p className='mt-1 text-gray-400 text-[5px] sm:text-lg '>
         I love turning ideas into scalable, user‑friendly products that make an impact.
        </p>
        <
      </motion.div>
   

    </div>
    
    </section>
   )
 }