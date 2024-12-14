import { Outlet, NavLink } from "react-router";

import Logo from "./assets/shared/logo.svg";
import IconHamburger from "./assets/shared/icon-hamburger.svg";

function RootLayout() {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <img src={Logo} alt="logo" />

        <img
          src={IconHamburger}
          alt="hamburger icon"
          className="block cursor-pointer md:hidden"
        />

        <nav className="hidden max-w-3xl bg-black p-4 md:block md:w-4/5">
          <ul className="flex w-full items-center justify-between">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "1rem" : "0",
                })}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "1rem" : "0",
                })}
              >
                01 DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "1rem" : "0",
                })}
              >
                02 CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "1rem" : "0",
                })}
              >
                03 TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default RootLayout;
