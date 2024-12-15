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
    <div className="mx-auto min-h-[calc(100vh-80px)] w-full p-4 md:max-w-4xl lg:max-w-6xl">
      <h1 className="my-4 mb-8 text-center text-xl uppercase text-blue-100 md:text-2xl lg:text-3xl">
        02 Meet your crew
      </h1>

      <div
        className="mx-auto flex w-full flex-col items-center justify-center p-8 md:flex-row md:justify-between"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full text-center md:w-3/5">
          <h3 className="text-lg font-semibold uppercase text-blue-200 md:text-xl lg:text-2xl">
            {crews[activeIndex].role}
          </h3>
          <h2 className="my-2 text-xl font-bold uppercase text-blue-100 md:text-2xl lg:text-3xl">
            {crews[activeIndex].name}
          </h2>
          <p className="my-4 text-sm text-blue-100 md:text-base lg:text-lg">
            {crews[activeIndex].bio}
          </p>
        </div>

        <div className="my-2 lg:my-0">
          <img
            src={
              crews[activeIndex].images.webp || crews[activeIndex].images.png
            }
            alt={`${crews[activeIndex].name} image`}
            className="mx-auto h-auto w-full max-w-72 rounded-lg lg:max-w-96"
          />
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 z-10 hidden h-16 w-10 -translate-y-1/2 cursor-pointer rounded-md bg-[#0B0D17]/50 text-2xl font-bold text-blue-100 md:block"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 hidden h-16 w-10 -translate-y-1/2 cursor-pointer rounded-md bg-[#0B0D17]/50 text-2xl font-bold text-blue-100 md:block"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
}

export default Crew;
