import Navbar from "./components/Navbar";
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Exprience from './sections/Exprience';
import Testemonial from './sections/Testemonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
// import ParticalsBackground from './components/ParticalsBackground';
import CoustomCourser from "./components/CoustomCourser";
import IntroAnimation from "./components/IntroAnimation";
import MusicPlayerBtn from "./components/musicPlayerBtn"; // Naya Component Import Kiya
import React from "react";

export default function App() {
  const [introDone , setintroDone] = React.useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setintroDone(true)} />}
      {introDone && (
        <div className="relative gradient text-white">
          <CoustomCourser/>
          
          {/* Poori screen par fixed position par sabse upar rahega */}
          <MusicPlayerBtn className="fixed bottom-8 right-8 z-[99999]" /> 
          
          {/* <ParticalsBackground/> */}

          <Navbar/> 
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Exprience/>
          <Testemonial/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </>
  )
}