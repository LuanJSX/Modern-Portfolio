import "./app.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

function App() {

  const [isloaded, setIsLoaded] = useState(false)
 
  useEffect(() => {
         setIsLoaded(true);
         emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  },[])

  return (
    <div className= {`app ${isloaded ? "loaded" : ""}`}>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Contact/>


      <motion.footer className="footer" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{ duration: 0.6}}>
      <p>&copy; Luan Portfólio  2025. All right reserved</p>
      </motion.footer>
      
    </div>
    
  );
}

export default App;
