import { useState } from "react";
import data from "../data.json";

function Technology() {
  const technology = data.technology;

  const [activeIndex, setActiveIndex] = useState(0);

  const activeTechnology = technology[activeIndex];

  return (
    <div className="mx-auto min-h-[calc(100vh-80px)] w-full p-4 md:max-w-4xl lg:max-w-6xl">
      <h1 className="my-4 mb-6 text-center text-xl uppercase text-blue-100 md:text-2xl lg:mb-8 lg:text-3xl">
        03 Space Launch 101
      </h1>

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-16">
        <div className="flex w-full flex-row items-center justify-center gap-4 lg:mx-4 lg:w-14 lg:flex-col lg:gap-10">
          {technology.map((_, index) => (
            <button
              key={index}
              className={`h-12 w-12 rounded-full border-2 border-blue-100 text-lg font-bold text-blue-100 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-100 text-blue-900"
                  : "bg-transparent"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="order-first w-full lg:order-last lg:w-2/5">
          <img
            src={
              window.innerWidth >= 1024
                ? activeTechnology.images.portrait
                : activeTechnology.images.landscape
            }
            alt={activeTechnology.name}
            className="mx-auto w-full max-w-2xl"
          />
        </div>

        <div className="w-full text-center lg:w-2/5 lg:text-left">
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
