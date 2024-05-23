import { NavBar } from './components'
import { About, Experience, Hero, Projects } from './pages'

function App() {
  return (
    <div className='w-[70%] mx-auto text-secondary'>
      <NavBar />
      <div>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  )
}

export default App
