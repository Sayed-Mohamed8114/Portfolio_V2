import { Link } from "react-router-dom";
import { projects } from "../../constants/Projects";
import { arrow } from "../../assets/icons/index";
import CTA from "../../components/common/CTA";
export default function Projects() {
  return (
    <section className="max-container  px-15 py-30 bg-sky-50 min-h-screen">
      <h1
        className="bg-linear-to-r from-sky-500 to-sky-800 
      font-extrabold text-3xl font-serif  lg:text-5xl bg-clip-text text-transparent
      "
      >
        My Projects
      </h1>

      <p className="text-gray-500 mt-2 leading-relaxed text-xs md:text-lg">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-100 w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-gray-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-800 "
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />

    </section>
  );
}
