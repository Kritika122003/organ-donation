import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Your health our integrity,Building a transparent future for organ donation
        </h1>
        <p>
        By choosing HEALNET, you're not just supporting a platform –
         you're joining a mission to improve healthcare outcomes and
          save lives through innovation, security, and collaboration.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
