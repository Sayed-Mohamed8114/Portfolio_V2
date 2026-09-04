import { Link } from "react-router-dom";
import { projects } from "../../constants/Projects";
import { arrow } from "../../assets/icons/index";
import CTA from "../../components/common/CTA";

export default function Projects() {
  return (
    <section className="max-container px-15 py-30 bg-sky-50 min-h-screen">
      <h1
        className="bg-linear-to-r from-sky-500 to-sky-800
        font-extrabold text-3xl font-serif
        lg:text-5xl bg-clip-text text-transparent"
      >
        My Projects
      </h1>

      <p className="text-gray-500 mt-2 leading-relaxed text-xs md:text-lg">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so
        if you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-30">
        {projects.map((project) => (
          <div
            key={project.name}
            className="lg:w-70 w-full h-80 flex flex-col"
          >
            <div className="block-container w-12 h-12">
              <div
                className={`btn-back rounded-xl ${project.theme}`}
              />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col flex-1">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 text-gray-500 leading-relaxed">
                {project.description}
              </p>

              <div
                className="mt-auto pt-6 flex items-center justify-evenly
                font-poppins"
              >
                <Link
                  to={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-800
                  hover:text-black hover:underline
                  duration-700 transition-colors
                  flex items-center gap-2"
                >
                  See Repo

                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </Link>

                <Link
                  to={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-sky-700
                  hover:text-black hover:underline
                  duration-700 transition-colors
                  flex items-center gap-2"
                >
                  Live Link

                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-slate-200" />

      {/* CTA */}
      <CTA />
    </section>
  );
}
