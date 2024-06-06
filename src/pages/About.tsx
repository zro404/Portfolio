import Emoji from '/WavingHand.svg';
export const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center flex-col xl:flex-row gap-10 xl:gap-16">
      <div
        className="bg-no-repeat bg-primary bg-center bg-cover bg-[url('/profile.jpg')] \
         rounded-full size-56 xl:w-[32vw] xl:h-[21vw]" id="dp"
      />
      <div className="xl:h-[38rem] w-full flex flex-col justify-center">
        <div className="glass p-10">
          <div className='flex items-center gap-3'>
            <h2>Hey There</h2>
            <img src={Emoji} className='size-12' />
          </div>
          <p className="mt-3 text-[18px] md:text-[20px]">
            I'm Harish, an innovative and passionate frontend developer,
            proficient in modern frameworks like React and Tailwind,
            I stay ahead of industry trends while continuously honing my skills to deliver cutting-edge solutions.
            I thrive in fast-paced environments, consistently exceeding expectations.
            Explore this portfolio to see my blend of creativity and technical expertise in action.
          </p>
        </div>
      </div>
    </div>
  )
}

