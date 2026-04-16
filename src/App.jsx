import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 max-w-5xl mx-auto px-4 w-full flex flex-col gap-10">
        <Welcome />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
      </div>
      <Footer />
    </div>
  )
}

export default App 