import { NavBar } from './components'
import { Hero } from './pages'

function App() {
  return (
    <div className='w-[70%] mx-auto'>
      <NavBar />
      <div className=''>
        <Hero />
        <Hero />
      </div>
    </div>
  )
}

export default App
