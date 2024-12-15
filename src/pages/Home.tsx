function Home() {
  return (
    <div className="mx-auto flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center p-4 md:h-[calc(100vh-144px)] md:max-w-2xl lg:max-w-3xl lg:flex-row lg:justify-between">
      <div className="my-6 lg:w-3/5">
        <h1 className="my-6 text-center text-xl uppercase text-blue-100 md:text-2xl lg:text-3xl">
          So you want to travel to{" "}
          <span className="mt-3 block text-4xl font-medium text-white md:text-4xl lg:text-5xl">
            space
          </span>
        </h1>

        <p className="text-center text-sm text-blue-100 md:text-base lg:text-lg">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="h-40 w-40 rounded-full bg-white text-base text-blue-900 md:text-lg lg:text-xl">
        Explore
      </button>
    </div>
  );
}

export default Home;
