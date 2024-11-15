import { InformationData } from "@/data/informationData";
import Image from "next/image";
import React from "react";
import img from "/public/mizan.jpg";

export default function Intro() {
  return (
    <div
      id="about"
      className="w-[95%] mx-auto py-20  gap-10 flex items-center justify-between"
    >
      <div className="w-2/5">
        <img
          src={InformationData.image}
          alt=""
          className="w-[90%] rounded-lg"
        />
        {/* <Image
          src={InformationData.image}
          alt="logo"
          width={50}
          height={50}
          className="w-[90%] rounded-lg"
        /> */}
      </div>
      <div className="w-3/5">
        <h1 className="text-3xl text-primary-2 leading-snug">
          Hello, I’m <br />
          <span className="font-bold text-4xl text-slate-900">
            {" "}
            {InformationData.name}
          </span>
        </h1>
        <h3 className="text-xl mt-3 mb-1 font-medium">
          {InformationData.jobTitle} from{" "}
          <span className="text-primary-2">{InformationData.country}</span>
        </h3>
        <p className="text-slate-700">{InformationData.description}</p>
      </div>
    </div>
  );
}
