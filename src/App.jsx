
import Header from "./components/Header";
import StarsParticles from "./components/Stars-bg";
import FallingStars from "./components/Falling-star-bg";

function App() {
    return (
      <body className="h-screen bg-neutral-700">
        <Header />
        {/* <StarsParticles /> */}
        <FallingStars />
      </body>
    )
}

export default App;