import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex  w-[95%] mx-auto items-center py-20 justify-between">
      <div className="w-1/2 space-y-5">
        <h1 className="text-6xl leading-tight font-bold">
          Welcome to My <br />{" "}
          <span className="text-primary">Digital Marketing</span> <br /> Service
        </h1>
        <p className="w-3/4 text-lg text-slate-600">
          Creating an innovative, functional, and lean business strategy for
          your success.
        </p>
        <div>
          <Button>Hire Me</Button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end pr-7">
        <Image
          src="https://fakeimg.pl/250x100/"
          alt="logo"
          width={50}
          height={50}
          className="w-[400px] rounded-lg h-[400px]"
        />
      </div>
    </div>
  );
}
