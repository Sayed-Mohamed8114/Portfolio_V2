import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="bg-white rounded-lg shadow-md items-center justify-center flex w-10 h-10 font-bold"
      >
        <p className="bg-linear-to-r text-transparent bg-clip-text from-sky-900 to-sky-600">SM</p>
      </NavLink>
      <nav className="flex items-center justify-center text-xl gap-6 font-medium">
        <NavLink
          to={"/about"}
          className={({isActive}) => (isActive ? `bg-linear-to-r text-transparent bg-clip-text from-sky-900 to-sky-600 font-extrabold` : "font-extrabold text-black")}
        >
            About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({isActive}) => (isActive ? `bg-linear-to-r text-transparent bg-clip-text from-sky-900 to-sky-600 font-extrabold` : "text-black font-extrabold")}
        >
            Projects
        </NavLink>
      </nav>
    </header>
  );
}
