import { useState } from "react";
import data from "../data.json";

function Destination() {
  const destinations = data.destinations;

  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center p-4 md:min-h-[calc(100vh-144px)] md:max-w-3xl lg:max-w-4xl lg:flex-row lg:justify-between">
      <div className="my-8">
        <h1 className="my-2 text-center text-xl uppercase text-blue-100 md:text-2xl lg:text-3xl">
          01 Pick your destination
        </h1>

        <img
          src={activeDestination.images.webp || activeDestination.images.png}
          alt={activeDestination.name}
          className="mx-auto my-4 h-40 w-40 lg:my-8 lg:h-80 lg:w-80"
        />
      </div>

      <div className="max-w-xl lg:w-1/2">
        <ul className="my-5 flex w-full justify-center gap-4 text-base uppercase text-blue-100 md:text-lg">
          {destinations.map((destination) => (
            <li
              key={destination.name}
              className={"cursor-pointer"}
              style={{
                textDecoration:
                  activeDestination.name === destination.name
                    ? "underline"
                    : "none",
                textUnderlineOffset:
                  activeDestination.name === destination.name ? "1.25rem" : "0",
              }}
              onClick={() => setActiveDestination(destination)}
            >
              {destination.name}
            </li>
          ))}
        </ul>

        <div className="my-6 md:my-9 lg:my-12">
          <h1 className="text-center text-3xl font-bold uppercase text-blue-100 md:text-4xl lg:text-5xl">
            {activeDestination.name}
          </h1>

          <p className="my-6 w-full text-center text-sm text-blue-100 md:my-9 md:text-base lg:my-12 lg:text-lg">
            {activeDestination.description}
          </p>

          <div className="h-px w-full bg-white"></div>

          <div className="mx-auto my-6 flex w-5/6 flex-col justify-center md:flex-row md:justify-between lg:w-full">
            <div className="my-3 w-full text-center uppercase text-blue-100 md:w-2/5">
              <h2>Avg. Distance</h2>
              <h3 className="text-3xl font-medium">
                {activeDestination.distance}
              </h3>
            </div>
            <div className="my-3 w-full text-center uppercase md:w-2/5">
              <h2>Est. Travel Time</h2>
              <h3 className="text-3xl font-medium">
                {activeDestination.travel}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
