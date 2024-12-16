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

  const NavItem = ({ to, label }: { to: string; label: string }) => (
    <NavLink
      to={to}
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        `relative uppercase text-blue-100 hover:underline hover:underline-offset-[1.25rem] ${
          isActive ? "underline underline-offset-[1.25rem]" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );

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
              <NavItem to="/" label="00 HOME" />
            </li>
            <li>
              <NavItem to="/destination" label="01 DESTINATION" />
            </li>
            <li>
              <NavItem to="/crew" label="02 CREW" />
            </li>
            <li>
              <NavItem to="/technology" label="03 TECHNOLOGY" />
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
            <NavItem to="/" label="00 HOME" />
            <NavItem to="/destination" label="01 DESTINATION" />
            <NavItem to="/crew" label="02 CREW" />
            <NavItem to="/technology" label="03 TECHNOLOGY" />
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default RootLayout;
