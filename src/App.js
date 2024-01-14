import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
