import TextType from "@/components/TextType";
import { Card, CardContent } from "@/shadcn/components/ui/card";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex justify-center items-center">
      <Card className="py-20 px-10 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-[#252525]">
        <CardContent className="flex gap-14">
          <img
            src="/profile.jpg"
            alt="profile pic"
            className="size-64 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-[#f5f5f555] hover:shadow-[0_0_40px_10px_#f5f5f555]"
          />
          <div className="flex flex-col justify-center gap-4">
            <TextType
              text={["~> Hey There", "~> Hey There"]}
              pauseDuration={4000}
              cursorCharacter="_"
              startOnVisible
              textColors={["#f5f5f5"]}
              className="text-3xl bungee-regular"
            />
            <p className="max-w-[50vw] text-lg">
              I'm Harish, a passionate frontend developer, proficient in modern
              frameworks like NextJs and ReactJs. I stay ahead of industry
              trends while continuously honing my skills to deliver cutting-edge
              solutions. I thrive in fast-paced environments, consistently
              exceeding expectations. Explore this portfolio to see my blend of
              creativity and technical expertise in action.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
