import { skills } from "../../constants/skills";
import { experiences } from "../../constants/Experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../../components/common/CTA";

export default function About() {
  console.log(skills);
  return (
    <section
      className="bg-sky-50 px-10 py-20 
    w-full min-h-screen flex flex-col items-center justify-center
    "
    >
      <div className="p-5 w-full flex flex-col items-center justify-center">
        <h2
          className="
    bg-linear-to-r from-sky-600 to-sky-900 font-serif font-extrabold
    text-2xl md:text-4xl bg-clip-text text-transparent
    "
        >
          Hello , I'm Sayed Mohamed <br />
          <span className="text-gray-400 font-serif text-sm md:text-xl">
            Software Engineer based in Cairo, Egypt . specializing in frontend
            development using react , Gsap , Three js and building cool websites
          </span>
        </h2>
      </div>
      <div className="py-10 flex flex-col px-5">
        <h2
          className="
      bg-linear-to-r from-sky-600 to-sky-950 font-extrabold
      bg-clip-text text-transparent text-2xl md:text-3xl font-serif mt-5
      "
        >
          MY Frontend Skills
        </h2>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => {
            return (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div
                  className="btn-front rounded-xl flex
                justify-center items-center cursor-pointer
                "
                >
                  <img
                    src={skill.logo}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-10 flex flex-col items-center justify-center lg:w-[70%]">
        <h1
          className="bg-linear-to-r from-sky-600 to-sky-950 font-extrabold
      bg-clip-text text-transparent text-2xl md:text-3xl font-serif mt-5
      "
        >
          Experience
        </h1>
        <p className="mt-5 flex flex-col text-center px-15 gap-3 font-serif text-gray-500">
          Completed an intensive 9-month React Frontend Development training
          through the Digital Egypt Pioneers Initiative (DEPI), gaining hands-on
          experience building responsive and interactive web applications using
          React.js, JavaScript, Tailwind CSS, React Router, and modern frontend
          development practices.
        </p>
      </div>
      <div className="mt-12 flex ">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.endDate}
              icon={
                <div className="w-full h-full items-center justify-center flex ">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[90%] h-[90%] object-contain rounded-full bg-white"
                  />
                </div>
              }
              iconStyle={{
                borderBottom: "5px",
                borderStyle: "solid",
                borderBottomColor: "oklch(82.8% 0.111 230.318)",
                boxShadow: "none",
              }}
              contentStyle={{
                borderBottom: "5px",
                borderStyle: "solid",
                borderBottomColor: "oklch(90.1% 0.058 230.902)",
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="font-serif text-2xl mb-3 font-semibold bg-linear-to-r from-sky-600 to-sky-950  bg-clip-text text-transparent">
                  {experience.title}
                </h3>
                <span className="text-sky-800 font-semibold">
                  {experience.company_name}
                </span>
                <p className="text-gray-500">{experience.description}</p>
                <div className="mt-3 text-sky-800 font-semibold font-poppins">
                  {experience.startDate} - {experience.endDate}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="border-sky-300" />
      <CTA />
    </section>
  );
}
