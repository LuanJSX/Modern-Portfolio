import "./app.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {

  const [isloaded, setIsLoaded] = useState(false)

  useEffect(() => {
         setIsLoaded(true)
  },[])
  return (
    <div className= {`app ${isloaded ? "loaded" : ""}`}>
      <Navbar />
      
      <Hero/>
      <Projects/>
      <Contact/>


      <>
      <p>&copy; Luan Portfólio  2025. All right reserved</p>
      </>
    </div>
  );
}

export default App;
