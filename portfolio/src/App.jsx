import './App.css'
import Navbar from './components/Navbar/Navbar'
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
// import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div>
      <Navbar />
      <SideNavbar />
      <About />
      <Skills />
      <Education/>
      <Projects />
    </div>
  )
}

export default App
