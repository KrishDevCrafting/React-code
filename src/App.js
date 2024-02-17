import Homepage from "./Home";
import AboutMe from "./aboutMe";
<<<<<<< HEAD
<<<<<<< HEAD
import { Routes , Route } from "react-router-dom";}
=======
import { Routes, Route, Link } from "react-router-dom";
>>>>>>> 574e3f0 (admin component added)
=======
import { Routes, Route, Link } from "react-router-dom";
>>>>>>> refs/remotes/origin/main
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
<<<<<<< HEAD
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
=======
        <Link to="/" className="text-danger">
          Homepage
        </Link>
        <Link to="/aboutme">About-Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
>>>>>>> refs/remotes/origin/main
      </Routes>
    </div>
  );
}
export default App;
