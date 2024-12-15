import { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router";

import Logo from "/assets/shared/logo.svg";
import IconHamburger from "/assets/shared/icon-hamburger.svg";
import IconClose from "/assets/shared/icon-close.svg";

const routeBackgroundClasses: Record<string, string> = {
  "/": "home",
  "/destination": "destination",
  "/crew": "crew",
  "/technology": "technology",
};

function RootLayout() {
  const location = useLocation();
  const pathname = `/${location.pathname.split("/")[1]}`;

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const backgroundClass = routeBackgroundClasses[pathname] || "default";

    document.body.className = "";
    document.body.classList.add(backgroundClass);

    return () => {
      document.body.className = "";
    };
  }, [pathname]);

  return (
    <>
      <header className="flex items-center justify-between p-4 md:py-6 md:pl-6 md:pr-0">
        <img src={Logo} alt="logo" />

        <img
          src={IconHamburger}
          alt="hamburger icon"
          className="block cursor-pointer md:hidden"
          onClick={() => setMenuOpen(true)}
        />

        <nav className="hidden max-w-3xl bg-black p-4 md:block md:w-4/5 md:bg-gray-200/10 md:p-7">
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

        <div
          className={`fixed left-0 top-0 ${menuOpen ? "block" : "hidden"} h-screen w-screen bg-[#0B0D17] md:hidden`}
        >
          <img
            src={IconClose}
            className="absolute right-7 top-7 cursor-pointer"
            alt="close menu icon"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="flex h-4/5 flex-col items-center justify-center gap-8">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              00 HOME
            </NavLink>

            <NavLink
              to="/destination"
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              01 DESTINATION
            </NavLink>

            <NavLink
              to="/crew"
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              02 CREW
            </NavLink>

            <NavLink
              to="/technology"
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: isActive ? "1rem" : "0",
              })}
            >
              03 TECHNOLOGY
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default RootLayout;
