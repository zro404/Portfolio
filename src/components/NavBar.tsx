import { useState } from "react"

export const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <header className="w-[70%] mx-auto fixed inset-x-0 top-0 flex items-center justify-between mt-7">
      <h1 className="nav-title">Harish</h1>
      <ul className="gap-16 md:flex hidden">
        <li>
          <p>
            About
          </p>
        </li>
        <li>
          <p>
            Projects
          </p>
        </li>
        <li>
          <p>
            Resume
          </p>
        </li>
        <li>
          <p>
            Hire Me
          </p>
        </li>
      </ul>
      <button className="md:hidden">
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
    </header>
  )
}

