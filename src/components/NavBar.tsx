import { useState } from "react"
import { Arrow } from "./Arrow";

const LINKS =
  <>
    <li>
      <a href="#about">
        About
      </a>
    </li>
    <li>
      <a href="https://github.com/zro404" target="_blank">
        Projects
      </a>
    </li>
    <li>
      <a href="https://docs.google.com/document/d/1mUa-c9qD0NHPQmbt4OrwylJQhHwqD_ySdAlXNh9GsQ8/edit?usp=sharing" target="_blank">
        Resume
      </a>
    </li>
    <li>
      <a href="#contact" className="lg:border-secondary lg:border-2 lg:p-2 lg:px-3 rounded-full flex items-center lg:gap-1 gap-2">
        Hire Me
        <Arrow />
      </a>
    </li>
  </>

export const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <header className={`px-[15%] fixed inset-x-0 top-0 pt-7 z-10 ${isShown && "bg-primary h-screen"}`}>
      <div className="flex items-center justify-between">
        <a href="#home"><h1 className="nav-title">Harish</h1></a>
        <ul className="gap-16 hidden lg:flex flex-row items-center">
          {LINKS}
        </ul>
        <button
          className="lg:hidden"
          onClick={() => setIsShown(!isShown)}
        >
          {isShown ? (
            <svg
              className="size-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="size-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
      <ul className={`flex flex-col h-full mt-20 gap-16 ${!isShown && "hidden"}`}>
        {LINKS}
      </ul>
    </header >
  )
}

