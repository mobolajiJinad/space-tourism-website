function DestinationTitan() {
  return (
    <div className="my-6 md:my-9 lg:my-12">
      <h1 className="text-center text-3xl font-medium uppercase text-blue-100 md:text-4xl lg:text-5xl">
        Titan
      </h1>

      <p className="my-6 w-full text-center text-sm text-blue-100 md:my-9 md:text-base lg:my-12 lg:text-lg">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>

      <div className="h-px w-full bg-white"></div>

      <div className="mx-auto my-6 flex w-5/6 flex-col justify-center md:flex-row md:justify-between lg:w-full">
        <div className="my-3 w-full text-center uppercase text-blue-100 md:w-2/5">
          <h2>avg. distance</h2>
          <h3 className="text-3xl font-medium">1.6 bil. km</h3>
        </div>
        <div className="my-3 w-full text-center uppercase md:w-2/5">
          <h2>est. travel time</h2>
          <h3 className="text-3xl font-medium">7 year</h3>
        </div>
      </div>
    </div>
  );
}

export default DestinationTitan;
