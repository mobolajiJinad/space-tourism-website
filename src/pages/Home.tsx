function Home() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 max-w-6xl flex-col items-center justify-center gap-4 p-4 lg:flex-row lg:justify-around lg:px-8">
      <div className="my-6 lg:w-3/5">
        <h1 className="my-6 text-center text-xl uppercase text-blue-100 md:text-2xl lg:text-4xl">
          So you want to travel to{" "}
          <span className="mt-3 block text-4xl font-medium text-white md:text-4xl lg:text-5xl">
            space
          </span>
        </h1>

        <p className="text-center text-sm text-blue-100 md:text-base lg:text-xl">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="h-32 w-32 rounded-full bg-white text-base font-medium uppercase text-blue-900 md:text-lg lg:h-52 lg:w-52 lg:text-2xl">
        Explore
      </button>
    </div>
  );
}

export default Home;
