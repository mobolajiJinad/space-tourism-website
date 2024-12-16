import { useState, useEffect, useMemo } from "react";
import data from "../data.json";

function Technology() {
  const technology = data.technology;

  const [activeIndex, setActiveIndex] = useState(0);

  const activeTechnology = technology[activeIndex];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = useMemo(
    () =>
      isLargeScreen
        ? activeTechnology.images.portrait
        : activeTechnology.images.landscape,
    [isLargeScreen, activeTechnology],
  );

  const NavButton = ({ index }: { index: number }) => (
    <button
      key={index}
      className={`h-12 w-12 rounded-full border-2 border-blue-100 text-lg font-bold transition-all duration-300 ${
        activeIndex === index
          ? "bg-blue-100 text-blue-900"
          : "bg-transparent text-blue-100 hover:bg-blue-100 hover:text-blue-900"
      }`}
      onClick={() => setActiveIndex(index)}
    >
      {index + 1}
    </button>
  );

  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 max-w-6xl flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:justify-around lg:px-8">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-16">
        <div className="flex w-full flex-row items-center justify-center gap-4 lg:mx-4 lg:w-14 lg:flex-col lg:gap-10">
          {technology.map((_, index) => (
            <NavButton key={index} index={index} />
          ))}
        </div>
        <div className="order-first w-full lg:order-last lg:w-2/5">
          <img
            src={imageSrc}
            alt={activeTechnology.name}
            className="mx-auto w-full max-w-2xl"
          />
        </div>

        <div className="w-full text-center lg:w-2/5 lg:text-left">
          <h1 className="my-4 mb-12 text-center text-xl uppercase text-blue-100 md:text-3xl lg:mb-20 lg:text-left lg:text-4xl">
            03 Space Launch 101
          </h1>
          <h3 className="my-0.5 text-base font-bold uppercase text-gray-500 md:text-lg lg:text-xl">
            The Terminology...
          </h3>
          <h2 className="my-4 text-2xl font-bold uppercase text-blue-100 md:text-3xl lg:text-4xl">
            {activeTechnology.name}
          </h2>
          <p className="my-4 text-base text-blue-100 md:text-lg lg:text-xl">
            {activeTechnology.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
