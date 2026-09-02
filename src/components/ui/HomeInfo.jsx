import { Link } from "react-router-dom";
import { arrow } from "../../assets/icons";

const InfoBox = ({ text, link, textBtn }) => {
  return (
    <div
      className="sm:text-xl sm:leading-snug text-center relative
    py-2 px-5 text-sky-50 mx-5 font-extrabold font-serif bg-linear-to-r from-sky-900 to-sky-700
    rounded-xl shadow-xl flex items-center justify-center w-md h-[10vh]"
    >
      <p className="font-medium bg-linear-to-r text-center from-sky-800 to-sky-950 bg-clip-text text-transparents ">
        {text}
      </p>
      <Link
        to={link}
        className="absolute mt-27 w-[80%] items-center justify-center hover:bg-sky-200 flex gap-3 bg-sky-100 text-sky-900 font-bold rounded-md hover:underline duration-700 p-3"
      >
        {textBtn}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center 
    py-4 px-8 text-sky-50 mx-5 font-extrabold font-serif bg-linear-to-r from-sky-900 to-sky-700
    rounded-xl shadow-xl
    "
    >
      Hi, I am
      <span className="bg-linear-to-r from-sky-800 to-sky-950 bg-clip-text text-transparents">
        {" "}
        Sayed Mohamd
      </span>
      <br />A SoftWare Engineer from Cairo
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "computer science student with hands-on real projects and picked up many skills along the way "
      }
      link={"/about"}
      textBtn={"Read More"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Led multiple projects to success over the years. Curious about the impact?"
      }
      link={"/projects"}
      textBtn={"Visit My Portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few ketstrokes away "
      }
      link={"/contact"}
      textBtn={"Let's Talk"}
    />
  ),
};

export default function HomeInfo({ currentStage }) {
  return renderContent[currentStage];
}
