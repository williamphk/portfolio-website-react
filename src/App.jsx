import "./App.css";
import Header from "./components/Header";
import About from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";

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
