import { useState } from "react"

const LINKS =
  <>
    <li>
      <a href="#about">
        About
      </a>
    </li>
    <li>
      <a href="">
        Projects
      </a>
    </li>
    <li>
      <a href="">
        Resume
      </a>
    </li>
    <li>
      <a href="">
        Hire Me
      </a>
    </li>
  </>

export const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <header className={`px-[15%] fixed inset-x-0 top-0 pt-7 ${isShown&&"bg-primary h-screen"}`}>
      <div className="flex items-center justify-between">
        <h1 className="nav-title">Harish</h1>
        <ul className="gap-16 hidden md:flex flex-row">
          {LINKS}
        </ul>
        <button
          className="md:hidden"
          onClick={() => setIsShown(!isShown)}
        >
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
        </button>
      </div>
      <ul className={`flex flex-col h-full mt-20 gap-16 ${!isShown&&"hidden"}`}>
        {LINKS}
      </ul>
    </header >
  )
}

