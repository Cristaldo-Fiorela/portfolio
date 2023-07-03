
// COMPONENTES
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AboutMe from "./components/About-me";
import Certification from "./components/Certification";
import Footer from "./components/Footer";
import LearningNow from "./components/LearningNow";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/Contact-me";

// CSS
import './css/style.css'
import FallingStars from "./components/Falling-star-bg";
import StarsParticles from "./components/Stars-bg";

function App() {
    return (
      <>
        <Header />
          <div className="flex flex-col gap-10">
          <Welcome />
          <AboutMe />
          <Skills />
          <LearningNow />
          <Projects />
          <Certification />
          <ContactMe />
          </div>
        <Footer />
        {/* <FallingStars /> */}
        {/* <StarsParticles /> */}
      </>
    )
}

export default App;