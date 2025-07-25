import "./App.css";
import Header from "./components/Header";
import About from "./views/About";
import Experiences from "./views/Experiences";
import Hero from "./views/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="w-full">
        <Hero />
        <About />
        <Experiences />
      </div>
      <footer className="flex justify-center text-sm font-light">
        <p>&copy; Copyright Harish G 2025</p>
      </footer>
    </div>
  );
}

export default App;
