import { NavBar } from './components'
import { About, Hero } from './pages'

function App() {
  return (
    <div className='w-[70%] mx-auto text-secondary'>
      <NavBar />
      <div>
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App
