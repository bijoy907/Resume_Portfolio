import React from "react";
import './App.css'
import Contact from "./Components/contact/Contact";
import Experience from "./Components/experience/Experience";
import Footer from "./Components/footer/Footer";
import Intro from "./Components/intro/Intro";
import Navbar from "./Components/navbar/Navbar";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/service/Services";
import Work from "./Components/work/Work";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
