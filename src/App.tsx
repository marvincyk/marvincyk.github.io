import { Backdrop } from "./components/Backdrop";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Work } from "./components/Work";

export const App = () => (
  <>
    <Backdrop />
    <div className="page">
      <Header />
      <main id="top" className="container">
        <Hero />
        <Work />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);
