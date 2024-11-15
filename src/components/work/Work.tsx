"use client";

import Lottie from "lottie-react";
import React from "react";
import { workMenu } from "@/data/informationData";

export default function Work() {
  return (
    <div className="bg-primary-1 border-y border-blue-300">
      <div className="grid  w-[95%] py-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {workMenu.map((work, id) => (
          <div
            key={id}
            className="bg-white border-b-8 shadow-xl  hover:scale-105 duration-300 min-h-72  rounded-sm px-4 gap-5 border-primary-2 cursor-help flex flex-col items-center justify-center"
          >
            <div className=" space-y-2">
              <Lottie
                className="w-40 mx-auto"
                animationData={work.animation}
                loop={true}
              />
              <h1 className="text-4xl font-semibold">{work.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
