import "./app.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
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
