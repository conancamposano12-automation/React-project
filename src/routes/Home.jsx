import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50 w-full flex items-center justify-center">
      <div className="flex flex-col items-start max-w-3xl gap-5">
        <h1 className="text-6xl text-black text-center mt-20">Home Page</h1>
        <p>
          Welcome to my Online Maram'an{" "}
          <b className="text-green-500 hover:text-4xl">Shop</b>
        </p>
      </div>
    </div>
  );
};

export default Home;
