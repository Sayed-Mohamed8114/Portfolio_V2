import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="bg-whte rounded-lg shadow-md items-center justify-center flex w-10 h-10 font-bold"
      >
        <p className="blue_gradient_text">SM</p>
      </NavLink>
      <nav className="flex items-center justify-center text-xl gap-6 font-medium">
        <NavLink
          to={"/about"}
          className={({isActive}) => (isActive ? `text-blue-500` : "text-black")}
        >
            About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({isActive}) => (isActive ? `text-blue-500` : "text-black")}
        >
            Projects
        </NavLink>
      </nav>
    </header>
  );
}
