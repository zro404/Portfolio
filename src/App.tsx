import { Footer, Matrix, NavBar } from './components'
import { About, Contact, Experience, Hero } from './pages'
// w-[70%] mx-auto 
function App() {
  return (
    <div className='text-secondary w-[90%] lg:w-[70%] mx-auto'>
      <Matrix />
      <NavBar />
      <div>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
