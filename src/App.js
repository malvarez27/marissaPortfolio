import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import resume from "./resume";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header header={resume.header} socialLinks={resume.socialLinks} />
      <About about={resume.about} socialLinks={resume.socialLinks} />
      <Portfolio portfolio={resume.portfolio} />
      <Testimonials testimonials={resume.testimonials} />
      <Contact contact={resume.contact} socialLinks={resume.socialLinks} />
      <Footer socialLinks={resume.socialLinks} />
    </div>
  );
}

export default App;
