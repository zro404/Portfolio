import DecryptedText from "@/components/DecryptedText";
import LetterGlitch from "@/components/LetterGlitch";
import TextType from "@/components/TextType";
export default function Hero() {
  return (
    <div id="hero" className="h-screen flex justify-center items-center">
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />

      <div className="z-1 flex flex-col font-bold bungee-regular md:ml-20 text-2xl md:text-6xl bg-transparent">
        <div className="flex gap-2 text-xl text-[#61dca3]">
          <p>{">"}</p>
          <TextType
            text={["whoami", "whoami"]}
            pauseDuration={3000}
            cursorCharacter="_"
            textColors={["#61dca3"]}
          />
        </div>
        <DecryptedText
          sequential
          speed={100}
          animateOn="view"
          text="Web Developer,"
          className="text-[#61dca3]"
          encryptedClassName="text-[#61dca3]"
        />
        <DecryptedText
          sequential
          speed={90}
          animateOn="view"
          text="Linux Enthusiast,"
          className="text-[#61dca3]"
          encryptedClassName="text-[#61dca3]"
        />
        <DecryptedText
          sequential
          speed={100}
          animateOn="view"
          text="Student"
          className="text-[#61dca3]"
          encryptedClassName="text-[#61dca3]"
        />
      </div>
    </div>
  );
}
