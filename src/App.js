import Homepage from "./Home";
import AboutMe from "./aboutMe";
<<<<<<< HEAD
import { Routes , Route } from "react-router-dom";}
=======
import { Routes, Route, Link } from "react-router-dom";
>>>>>>> 574e3f0 (admin component added)
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
<<<<<<< HEAD
        <a href="#" className="navbar-brand">
          Homepage
        </a>
        <a href="#" className="navbar-brand">
          About Me
        </a>
      </nav>
      <Routes>
      <Route path ="/" element ={<Homepage/>} />
      <Route path ="/" element ={<AboutMe/>} />
=======
        <Link path="/">Homepage</Link>
        <Link path="about-me">About-Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about-me" element={<AboutMe />} />
>>>>>>> 574e3f0 (admin component added)
      </Routes>
    </div>
  );
}
export default App;
