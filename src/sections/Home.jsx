import { useMemo, useState, useEffect } from 'react';
import ParticlesBackground from './../components/ParticalsBackground'; // Apni spelling check kar lena agar file na mile to
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaUpwork,  } from 'react-icons/fa6';
// import { init } from '@emailjs/browser';
import avatarImg from '/src/assets/avator.png';
// import About from './About';

const socials = [
  {Icon : FaGithub , label : "Github" , link : "https://github.com/mahhi09"},
  {Icon : FaInstagram , label : "Instagram " , link : "https://www.instagram.com/mahhi.io/"},
  {Icon : FaUpwork , label : "UpWork " , link : "https://www.upwork.com/freelancers/~015b7ce1890e6da66d"},
  
]

const glowVariants = {
  initial :{ scale: 1, y: 0 , filter: "drop-shadow(0 0 0 rgba(0,0,0,0.8))"},
    hover:  {
      scale:1.2 , y : -3 ,
       filter : "drop-shadow( 0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16, 185, 129,0.8))",
       transition: {type :  "spring" , stiffness : 300, damping : 15} 
    },
    tap : {scale : 0.95, y: 0, transition : {duration :  0.08 }}

}

export default function Home() {
  // Roles list (Typo bhi theek kar diye hain)
  const roles = useMemo(() => ["Web Developer", "UI/UX Designer", "Penetration Tester"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[index];

    // Agar text poora type ho gaya hai aur delete nahi ho raha, to thoda wait karo fir delete shuru karo
    if (!deleting && subIndex === currentWord.length) {
      const timeoutId = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(timeoutId);
    }

    // Agar poora delete ho chuka hai, to agle word par jao
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // Normal typing aur deleting ka timer
    const timeoutId = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeoutId);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="h-screen w-full relative px-10 bg-black overflow-hidden">
      <ParticlesBackground />

      <div className="absolute inset-0">
        <div 
          className="absolute -top-32 -left-32 
            w-[70vw] sm:w-[50vw] md:w-[40vw] 
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse"
        ></div>

        <div 
          className="absolute bottom-0 right-0 
            w-[70vw] sm:w-[50vw] md:w-[40vw] 
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse"
          style={{ animationDelay: '300ms' }}
        ></div>
      </div> 




      <div className="relative z-10 h-full w-full max-w-7xl mx-{auto} px-45 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-{auto} max-w-[43rem]">
            <motion.div 
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white tracking-wide min-h-[1.6rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>
                {roles[index].substring(0, subIndex)}
              </span>
              <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
              style={{height:"2.3rem"}}></span>
            </motion.div>
   
            <motion.h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg'
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y:0}}
            transition={{duration:1}}>
              Hello, I'm
              <br />
              <span className='text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-6xl lg:whitespace-nowrap'>
                Mayank Dandare
              </span>
            </motion.h1>

            <motion.p className='mt-5 text-base sm:text-lg md:text-xl lg:text-[15px] text-gray-300 max-w-2xl mx-auto lg:mx-0'
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.4, duration:0.8}}
            viewport={{once:false , amount:0.5}}>
              I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.
            </motion.p>
            <motion.div className='mt-7 flex flex-wrap items-center justify-between lg:justify-start gap-6 '
            initial={{opacity:0, }}
            animate={{opacity:1}}
            transition={{delay:0.8, duration:0.8}}>

              <a href="#project"
              className='px-5 py-2 rounded-full font-medium text-lg text-white 
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg
              shadow-lg hover:scale-105 transition-all '>
                View My Work
              </a>

              <a href="../Fake-Resume"
              download
              className='px-5 py-2 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all'>
                My Resume
              </a>

            </motion.div>

            <div className='mt-10 flex gap-5 text-2xl md:text-3xl justify-between lg:justify-start'>
             {socials.map(({Icon , label  , link}) => (
            <motion.a
                href={link}
                key={label}
                target="_blank"
                aria-label={label}
                rel="noopener noreferrer"
                variants= {glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap" 
                className='text-gray-300'>

              <Icon/>
            </motion.a>
            ))}
            </div>

          </div>
        </div>





      <div className='relative hidden lg:block'>



{/* Avtor BackgroundGradient--------------- */}
     
        <div 
        className='absolute top-1/2 -translate-y-1/2 pointer-events-none'
        style={{
          right : "10px" , width : " min(22vw , 410px )" , height: "min(40vw , 760px )" , borderRadius: "50%" ,
          filter: "blur(38px)" , opacity:0.32 , 
          background: "conic-gradient(from 0deg  , #1cd8d2 , #00bf8f , #302b63 , #1cd8d2)"
        }} />

{/* Avtor BackgroundGradient--------------- */}





{/* Avtor Image ---------- */}


        <motion.img src={avatarImg} alt="Mahhi"   
        className='absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none'
        style={{
         right :"-30px", width:"min(45vw , 780px)", maxHeight:  "90vh"
  
        }}
        initial={{opacity:0, y: 40 , scale: 0.98}}
        animate={{opacity:1, y:0 ,scale : 1}}
        transition={{delay: 0.2 , duration:0.8}}
        />

{/* Avtor Image ---------- */}



      </div>
            
      </div>
    </section>
  );
} 