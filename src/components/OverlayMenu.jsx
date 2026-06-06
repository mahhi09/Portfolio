import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

// import Exprience from './../sections/Exprience';
// import Testemonial from './../sections/Testemonial';
// import Contact from './../sections/Contact';

export default function OverlayMenu({ isOpen, onClose }) {
 const isMobile = typeof window !== "undefined" && window.innerWidth <1024;
 const origin = isMobile ? "95% 8%" : "50% 8%";


  return (
    <AnimatePresence>
      {isOpen && (
        /* bg-black/70 lagaya hai (0,0,0,0.7) aur z-[999] taaki mouse glow aur click dono chalein */
        <motion.div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 "
        initial = {{clipPath : `circle(0% at ${origin})`}}
        animate = {{clipPath : `circle(150% at ${origin})`}}
        exit = {{clipPath : `circle(0% at ${origin})`}}
        transition = {{duration : 0.7 , ease: [0.4,0,0.2,1]}}
        style={{backgroundColor:"rgba(0,0,0,0.9)"}}>
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            aria-label="Close Menu"
          > 
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {[
              "Home", 
              "About", 
              "Skills", 
              "Project", 
              "Exprience", 
              "Testemonial", 
              "Contact"
            ].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-4xl text-white font-semibold hover:text-purple-500 transition-colors duration-300 block cursor-pointer" 
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}