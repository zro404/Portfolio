import { Github, Home, Linkedin, MailPlus, UserRound } from "lucide-react";
import "./App.css";
import Dock from "./components/Dock";
import About from "./views/About";
import Experiences from "./views/Experiences";
import Hero from "./views/Hero";
import Contact from "./views/Contact";

const DockItems = [
  {
    icon: <Home size={20} color="white" />,
    label: "Home",
    onClick: () =>
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <UserRound size={20} color="white" />,
    label: "About Me",
    onClick: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <MailPlus size={20} color="white" />,
    label: "Contact Me",
    onClick: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Linkedin size={20} color="white" />,
    label: "LinkedIn",
    onClick: () => {
      window.open("https://www.linkedin.com/in/harish3124/", "_blank");
    },
  },
  {
    icon: <Github size={20} color="white" />,
    label: "Github",
    onClick: () => {
      window.open("https://github.com/zro404", "_blank");
    },
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <div className="w-full">
        <Hero />
        <About />
        <Experiences />
        <Contact />
      </div>
      <footer className="flex justify-center text-sm font-semibold mt-5 mb-8">
        <p>&copy; Copyright Harish G 2025</p>
      </footer>
      <Dock
        items={DockItems}
        baseItemSize={40}
        panelHeight={60}
        magnification={100}
        className="fixed bg-[#ecfff6] border-[#61dca3]"
      />
    </div>
  );
}

export default App;
