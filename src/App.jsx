import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ProjectDetail from "./pages/ProjectDetail";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
