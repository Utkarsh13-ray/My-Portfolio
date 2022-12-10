// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Education from './Components/Education';
import About from './Components/About';
import Footer from './Components/Footer';
import Particles from './Components/Particles';

function App() {

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
 

  return (
    <>
    <Navbar/>
    <Particles/>
    <Home />
    <Projects />
    <Achievements/>
    <Education/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
