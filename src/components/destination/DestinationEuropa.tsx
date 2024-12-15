function DestinationEuropa() {
  return (
    <div className="my-6 md:my-9 lg:my-12">
      <h1 className="text-center text-3xl font-medium uppercase text-blue-100 md:text-4xl lg:text-5xl">
        Europa
      </h1>

      <p className="my-6 w-full text-center text-sm text-blue-100 md:my-9 md:text-base lg:my-12 lg:text-lg">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover's dream. With an icy surface, it's perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>

      <div className="h-px w-full bg-white"></div>

      <div className="mx-auto my-6 flex w-5/6 flex-col justify-center md:flex-row md:justify-between lg:w-full">
        <div className="my-3 w-full text-center uppercase text-blue-100 md:w-2/5">
          <h2>avg. distance</h2>
          <h3 className="text-3xl font-medium">628 mil. km</h3>
        </div>
        <div className="my-3 w-full text-center uppercase md:w-2/5">
          <h2>est. travel time</h2>
          <h3 className="text-3xl font-medium">3 years</h3>
        </div>
      </div>
    </div>
  );
}

export default DestinationEuropa;
