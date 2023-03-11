import "./App.css";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Project from './Project/Project'
import Contact from './Contact/Contact'
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <Skills />
    <Project />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
