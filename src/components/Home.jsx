import React from "react";

const Home = () => {
  return (
    <div className="bg-amber-100 flex justify-center items-center md:justify-start md:items-center">
      <div className="h-screen flex flex-col md:flex-row items-center justify-center">
        <section id="home" className="w-full flex flex-col pl-9">
          <h1 className="text-7xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center md:text-start">Welcome to Shoespace</h1>
          <p className="text-center md:text-start text-2xl md:text-3xl">The best place to find your next pair</p>
        </section>
        <section className="w-1/2">
        </section>
      </div>
    </div>
  );
};

export default Home;
