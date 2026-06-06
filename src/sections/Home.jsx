import { useMemo, useState, useEffect } from 'react';
import ParticlesBackground from './../components/ParticalsBackground'; // Apni spelling check kar lena agar file na mile to
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaUpwork } from 'react-icons/fa6';
// import { init } from '@emailjs/browser';
import avatarImg from '/src/assets/avator.png';
// import About from './About';

const socials = [
  { Icon: FaGithub, label: "Github", link: "https://github.com/mahhi09" },
  { Icon: FaInstagram, label: "Instagram ", link: "https://www.instagram.com/mahhi.io/" },
  { Icon: FaUpwork, label: "UpWork ", link: "https://www.upwork.com/freelancers/~015b7ce1890e6da66d" },
]

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0.8))" },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow( 0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16, 185, 129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
}

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "UI/UX Designer", "Penetration Tester"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[index];

    if (!deleting && subIndex === currentWord.length) {
      const timeoutId = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(timeoutId);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeoutId = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeoutId);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="min-h-screen lg:h-screen w-full relative px-4 sm:px-10 bg-black overflow-y-auto lg:overflow-hidden flex items-center py-10 lg:py-0">
      <ParticlesBackground />

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDelay: '300ms' }}></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative order-1 lg:order-1 mt-10 lg:mt-0">
          <div className="w-full mx-auto lg:mx-0 max-w-[43rem]">
            
            {/* Typing Effect */}
            <motion.div
              className="mb-3 text-lg sm:text-2xl md:text-3xl font-semibold text-white tracking-wide min-h-[1.6rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle h-[1.8rem] sm:h-[2.3rem]"></span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className='text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <br />
              <span className='text-white font-bold text-4xl sm:text-6xl md:text-7xl lg:text-6xl lg:whitespace-nowrap'>
                Mayank Dandare
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className='mt-5 text-sm sm:text-lg md:text-xl lg:text-[15px] text-gray-300 max-w-2xl mx-auto lg:mx-0'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className='mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#project" className='px-5 py-2 rounded-full font-medium text-base sm:text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg shadow-lg hover:scale-105 transition-all'>
                View My Work
              </a>
              <a href="../Fake-Resume" download className='px-5 py-2 rounded-full text-base sm:text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all'>
                My Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <div className='mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start'>
              {socials.map(({ Icon, label, link }) => (
                <motion.a
                  href={link}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className='text-gray-300'
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

          </div>
        </div>

        {/* Right Avatar Column (Now visible and responsive on mobile too) */}
        <div className='relative w-full flex justify-center lg:block order-2 lg:order-2 min-h-[300px] sm:min-h-[450px] lg:min-h-0'>
          
          {/* Avatar Background Gradient */}
          <div
            className='absolute top-1/2 -translate-y-1/2 pointer-events-none'
            style={{
              right: "0",
              left: "0",
              margin: "auto",
              width: "min(45vw, 350px)",
              height: "min(45vw, 350px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
            }} 
          />

          {/* Avatar Image */}
          <motion.img 
            src={avatarImg} 
            alt="Mahhi"
            className='lg:absolute top-1/2 lg:-translate-y-1/2 object-contain select-none pointer-events-none w-[75%] sm:w-[55%] lg:w-[min(45vw,780px)] max-h-[50vh] lg:max-h-[90vh] right-[-30px]'
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />

        </div>

      </div>
    </section>
  );
}