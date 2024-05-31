import Emoji from '../assets/WavingHand.svg';
export const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center flex-col lg:flex-row gap-10 lg:gap-20">
      <div
        className="bg-no-repeat bg-primary bg-center bg-cover bg-[url('/src/assets/profile.jpg')] \
        lg:w-[49em] lg:h-[30rem] rounded-full lg:rounded-full size-56"
      />
      <div className="lg:h-[38rem] w-full flex flex-col justify-center">
        <div className='flex items-center gap-3'>
          <h2>Hey There</h2>
          <img src={Emoji} className='size-12' />
        </div>
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

