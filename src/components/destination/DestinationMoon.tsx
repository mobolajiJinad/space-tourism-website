function DestinationMoon() {
  return (
    <div className="my-6 md:my-9 lg:my-12">
      <h1 className="text-center text-3xl font-medium uppercase text-blue-100 md:text-4xl lg:text-5xl">
        Moon
      </h1>

      <p className="my-6 w-full text-center text-sm text-blue-100 md:my-9 md:text-base lg:my-12 lg:text-lg">
        See our planet as you've never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you're
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <div className="h-px w-full bg-white"></div>

      <div className="mx-auto my-6 flex w-5/6 flex-col justify-center md:flex-row md:justify-between lg:w-full">
        <div className="my-3 w-full text-center uppercase text-blue-100 md:w-2/5">
          <h2>avg. distance</h2>
          <h3 className="text-3xl font-medium">384,400 km</h3>
        </div>
        <div className="my-3 w-full text-center uppercase md:w-2/5">
          <h2>est. travel time</h2>
          <h3 className="text-3xl font-medium">3 days</h3>
        </div>
      </div>
    </div>
  );
}

export default DestinationMoon;
