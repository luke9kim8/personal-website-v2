import React , {useRef}from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Components/About'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 
function App() {
  
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const resumeRef = useRef(null)
  const contactRef = useRef(null)

  const executeAboutScroll = () => scrollToRef(aboutRef)
  const executeProjectScroll = () => scrollToRef(projectsRef)
  const executeResumeScroll = () => scrollToRef(resumeRef)
  const executeContactScroll = () => scrollToRef(contactRef)
  return (
    <div className="App" >
      
      <div className="main"> 
        <div className="main-description">
          <h1 style={{fontSize:"64px", letterSpacing: "1rem"}}>LUKE KIM</h1>
          <ul style={{listStyleType:"none", fontSize:"32px"}}>
            <li> Web Developer </li>
            <li> CS Student </li>
          </ul>
        </div>
        <nav>
          <a className="navButton" onClick={executeAboutScroll}> About </a>
          <a className="navButton" onClick={executeProjectScroll}> Projects  </a>
          <a className="navButton" onClick={executeResumeScroll}> Resume  </a>
          <a className="navButton" onClick={executeContactScroll}> Contact  </a>
          <div onClick="location.href='https://google.com';">
            <a style={{color:"black"}}href="https://www.google.com"><FaLinkedin/></a>
            <a style={{color:"black"}}href="https://www.google.com"><FaGithubSquare/></a>
          </div>
        </nav>
        
      </div>
      <About style={{height:"auto"}}divRef={aboutRef}/>
      <Projects divRef={projectsRef}/>
      <Resume divRef={resumeRef}/>
      <Contact divRef={contactRef}/>
     
      
      
    </div>
  );
}

export default App;
