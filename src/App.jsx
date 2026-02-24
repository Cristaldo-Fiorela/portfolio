import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {

  return (
    <div className='max-w-5xl mx-auto px-4 flex flex-col gap-4'>
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects/>
      <Footer />
    </div>
  )
}

export default App 