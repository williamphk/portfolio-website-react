import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/about.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/Footer/jsx";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
