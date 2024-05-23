import { Footer, NavBar } from './components'
import { About, Contact, Experience, Hero, Projects } from './pages'

function App() {
  return (
    <div className='w-[70%] mx-auto text-secondary'>
      <NavBar />
      <div>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
