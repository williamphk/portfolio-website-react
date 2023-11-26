import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop";
import LandingAnimation from "./components/LandingAnimation.jsx";

export default function App() {
  return (
    <>
      <Header />
      <LandingAnimation />
      <div>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
