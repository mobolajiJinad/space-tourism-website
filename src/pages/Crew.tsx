import React, { useState } from "react";

import data from "../data.json";

function Crew() {
  const crews = data.crew;

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? crews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === crews.length - 1 ? 0 : prev + 1));
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchStartX - touchEndX < -50) {
      handlePrev();
    }
  };

  return (
    <>
      <div
        className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 max-w-6xl flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:justify-around lg:px-8"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full text-center lg:w-5/12 lg:text-left">
          <h1 className="my-4 mb-12 text-center text-xl uppercase text-blue-100 md:text-3xl lg:mb-20 lg:text-left lg:text-4xl">
            02 Meet your crew
          </h1>

          <h3 className="text-lg font-semibold uppercase text-blue-200 md:text-2xl">
            {crews[activeIndex].role}
          </h3>
          <h2 className="my-2 text-xl font-bold uppercase text-blue-100 md:text-3xl">
            {crews[activeIndex].name}
          </h2>
          <p className="my-4 text-sm text-blue-100 md:text-lg">
            {crews[activeIndex].bio}
          </p>
        </div>

        <img
          src={crews[activeIndex].images.webp || crews[activeIndex].images.png}
          alt={`${crews[activeIndex].name} image`}
          className="my-2 h-auto w-full max-w-96 lg:my-0 lg:ml-auto lg:w-7/12"
        />
      </div>

      {/* <button
        className="absolute left-4 top-1/2 z-10 hidden h-16 w-10 -translate-y-1/2 cursor-pointer rounded-md bg-[#0B0D17]/50 text-2xl font-bold text-blue-100 lg:block"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 hidden h-16 w-10 -translate-y-1/2 cursor-pointer rounded-md bg-[#0B0D17]/50 text-2xl font-bold text-blue-100 lg:block"
        onClick={handleNext}
      >
        {">"}
      </button> */}
    </>
  );
}

export default Crew;
