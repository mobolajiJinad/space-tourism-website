import { NavLink, Outlet, useLocation } from "react-router";

import ImageMoon from "../assets/destination/image-moon.png";
import ImageMars from "../assets/destination/image-mars.png";
import ImageEuropa from "../assets/destination/image-europa.png";
import ImageTitan from "../assets/destination/image-titan.png";

function Destination() {
  const location = useLocation();
  const pathname = `/${location.pathname.split("/")[2]}`;

  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center p-4 md:min-h-[calc(100vh-144px)] md:max-w-3xl lg:max-w-4xl lg:flex-row lg:justify-between">
      <div className="my-8">
        <h1 className="my-2 text-center text-xl uppercase text-blue-100 md:text-2xl lg:text-3xl">
          01 Pick your destination
        </h1>

        {(pathname === "/moon" || pathname === "/undefined") && (
          <img
            src={ImageMoon}
            alt="Image of the moon"
            className="mx-auto my-4 h-40 w-40 lg:my-8 lg:h-80 lg:w-80"
          />
        )}

        {pathname === "/mars" && (
          <img
            src={ImageMars}
            alt="Image of the mars"
            className="mx-auto my-4 h-40 w-40 lg:my-8 lg:h-80 lg:w-80"
          />
        )}

        {pathname === "/europa" && (
          <img
            src={ImageEuropa}
            alt="Image of europa"
            className="mx-auto my-4 h-40 w-40 lg:my-8 lg:h-80 lg:w-80"
          />
        )}

        {pathname === "/titan" && (
          <img
            src={ImageTitan}
            alt="Image of titan"
            className="mx-auto my-4 h-40 w-40 lg:my-8 lg:h-80 lg:w-80"
          />
        )}
      </div>

      <div className="max-w-xl lg:w-1/2">
        <ul className="my-5 flex w-full justify-center gap-4 text-base uppercase text-blue-100 md:text-lg">
          <li>
            <NavLink
              to="moon"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              moon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mars"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              mars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="europa"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              europa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="titan"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              titan
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
}

export default Destination;
