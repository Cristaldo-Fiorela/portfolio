
import Header from "./components/Header";
import StarsParticles from "./components/Stars-bg";
import FallingStars from "./components/Falling-star-bg";
import Welcome from "./components/Welcome";
import AboutMe from "./components/About-me";

function App() {
    return (
      <>
        <Header />
        {/* <StarsParticles /> */}
        <Welcome />
        <FallingStars />
        <AboutMe />
      </>
    )
}

export default App;