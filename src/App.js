import Homepage from "./Home";
import AboutMe from "./aboutMe";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <Link path="/">Homepage</Link>
        <Link path="about-me">About-Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}
export default App;
