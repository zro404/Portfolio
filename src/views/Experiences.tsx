import ScrollVelocity from "@/components/ScrollVelocity";
import TextType from "@/components/TextType";
import { Badge } from "@/shadcn/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences: ExperienceItemType[] = [
  {
    title: "Web Development Lead",
    company: "HackClub VIT",
    period: "Apr 2025 - Present",
    description: "",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Web Development Intern",
    company: "CoRider India",
    period: "Nov 2023 - Apr 2024",
    description: "",
    technologies: ["React", "SocketIO", "ChakraUI", "Jira", "Bitbucket"],
  },
  {
    title: "Frontend Developer",
    company: "Linux Club VIT",
    period: "Sep 2023 - Sep 2024",
    description: "",
    technologies: ["Linux"],
  },
  {
    title: "Web Developer",
    company: "HackClub VIT",
    period: "Sep 2023 - Present",
    description: "",
    technologies: ["React", "TailwindCSS", "Git", "GitHub", "Figma"],
  },
];

type ExperienceItemType = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export default function Experiences() {
  return (
    <>
      <ScrollVelocity
        texts={["Experiences"]}
        className="text-sm px-1 text-[#ecfff6] font-light bungee-regular"
        parallaxClassName="w-full bg-black"
        numCopies={20}
      />
      <div className="mx-auto py-12 md:py-20 px-0 flex flex-col justify-center items-center gap-5">
        <TextType
          text={["My Journey So Far", "My Journey So Far"]}
          pauseDuration={3000}
          cursorCharacter="_"
          textColors={["#000000"]}
          className="bungee-regular text-3xl md:ml-10"
        />
        <div className="relative mx-3 flex">
          <ExperienceItem experiences={experiences} alignment="left" />
          {/* Timeline line */}
          <div className=" top-4 bottom-0 border-l-2" />
          <ExperienceItem experiences={experiences} alignment="right" />
        </div>
      </div>
    </>
  );
}

const ExperienceItem = ({
  experiences,
  alignment,
}: {
  experiences: ExperienceItemType[];
  alignment: "left" | "right";
}) => {
  return (
    <div>
      {experiences.map(
        ({ company, description, period, technologies, title }, index) => {
          const isFiltered =
            (alignment === "left" && index % 2 === 0) ||
            (alignment === "right" && index % 2 !== 0);
          return (
            <div
              key={index}
              className={`relative pb-12 last:pb-0 ${
                isFiltered ? "text-transparent my-5 select-none" : ""
              } ${alignment === "left" ? "md:pr-8" : "pl-3 md:pl-8"}`}
            >
              {/* Timeline dot */}
              {!isFiltered && (
                <div
                  className={`absolute h-3 w-3 -translate-x-1/2 top-3 rounded-full border-2 border-primary bg-background ${
                    alignment === "right" ? "left-[-0.05em]" : "right-[-0.8em]"
                  }`}
                />
              )}

              {/* Content */}
              <div className={`flex flex-col gap-2`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center ${
                      isFiltered ? "hidden" : ""
                    }`}
                  >
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">
                    {company}
                  </span>
                </div>
                <div>
                  <h3 className="text-md sm:text-xl font-medium">{title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm select-none">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 select-none">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`rounded-full ${isFiltered ? "hidden" : ""}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
