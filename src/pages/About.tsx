export const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center flex-col lg:flex-row justify-center gap-10 lg:gap-20">
      <div
        className="bg-no-repeat bg-primary bg-blend-luminosity bg-center bg-cover bg-[url('/src/assets/profile.png')] \
        lg:w-[28rem] lg:h-[38rem] lg:min-w-[25rem] rounded-full lg:rounded-none size-56"
      />
      <div className="lg:h-[38rem] lg:w-1/2 w-full">
        <h2>Hey There 👋</h2>
        <p className="mt-3">
          I'm Harish, an innovative and passionate frontend developer,
          proficient in modern frameworks like React and Tailwind,
          I stay ahead of industry trends while continuously honing my skills to deliver cutting-edge solutions.
          I thrive in fast-paced environments, consistently exceeding expectations.
          Explore this portfolio to see my blend of creativity and technical expertise in action.
        </p>
      </div>
    </div>
  )
}

