import { useEffect, useRef, useState } from 'react';
import OverlayMenu from './OverlayMenu';
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi"
// import { useRef } from 'react';

// import { FlatTree } from 'framer-motion';

export default function Navbar(){
 const [menuOpen , setMenuOpen ] = useState(false);
 const [visible , setVisible ] = useState(true);
 const [forceVisible, setForceVisible] = useState(false);

 const lastScrollY = useRef(0);
 const timerId = useRef(null);

 useEffect(()=>{
  const homeSection = document.querySelector("#home");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if(entry.isIntersecting){
        setForceVisible(true);
        setVisible(true);
      } else{
        setForceVisible(false);

      }
    },{threshold :0.1}
  )
  if(homeSection) observer.observe(homeSection);
  return()=>{
      if(homeSection) observer.unobserve(homeSection);
  }

 },[])

 useEffect(() => {
  const handleScroll = () =>{
    if(forceVisible){
      setVisible(true);
      return
    }
    const CurrentScrollY = window.scrollY;
    if(CurrentScrollY > lastScrollY.current){
      setVisible(false);
    }else{
      setVisible(true)

      if(timerId.current)  clearTimeout(timerId.current);
      timerId.current =  setTimeout(() => {
        setVisible(false);

      }, 3000)
    }
    lastScrollY.current = CurrentScrollY;
  }

  window.addEventListener("scroll" , handleScroll, {passive:true})

  return(() => {
    window.removeEventListener("scroll", handleScroll)
    if(timerId.current) clearTimeout(timerId.current)

  })
 },[forceVisible])




 return (
   <>




    {/* <nav className={`fixed top-0 left-0 w-full flex items-center 
      justify-between px-6 py-4 z-50 transition-transform duration-300
       ${visible ? "translate-y-0" : "-translate-y-full"}`}>
     
     <div className='flex items-center space-x-2'>
       <img src={Logo} alt="" className='w-20 h-20 '/>
       <div className='text-2xl font-semibold text-white hidden sm:block'>
         Mahhi
       </div>
     </div>

     <div className='block lg:absolute lg:left-1/2 lg:-transform lg:-translate-X-1/2'>
       <button onClick={() => setMenuOpen(true)} 
        className='text-white text-3xl focus:outline-none cursor-pointer'
        aria-label="open Menu">
         <FiMenu />
       </button>
     </div>

     <div className='hidden lg:block'>
         <a href="#contact"
         className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300'>
           Reachout    
         </a>
     </div>

    </nav>      */}








    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ] `}>
  
  <div className='flex items-center space-x-2'>
    <img src={Logo} alt="Logo" className='w-10 h-10 object-contain' />
    <div className='text-1xl font-semibold text-white hidden sm:block'>
      Mahhi
    </div>
  </div>

  {/* Center Button */}
  <div className='block lg:absolute lg:right-2 lg:transform lg:-translate-x-1/2'>
    <button onClick={() => setMenuOpen(true)} 
      className='text-white text-2xl focus:outline-none cursor-pointer'
      aria-label="open Menu">
      <FiMenu />
    </button>
  </div>

  {/* Right Button */}

  {/* <div className='hidden lg:block'>
    <a href="#contact"
      className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition-opacity duration-300'>
      Reachout    
    </a>
  </div> */}

</nav>

    <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />      
   </>
 )
}