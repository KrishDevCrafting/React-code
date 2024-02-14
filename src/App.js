import Homepage from "./Home";
import AboutMe from "./aboutMe";
import { Routes , Route } from "react-router-dom";}
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
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
      </Routes>
    </div>
  );
}
export default App;
