"use client";
import { CommitmentData } from "@/data/informationData";
import React from "react";
import { Count, Experiences, Review } from "./Count";

export default function Commitment() {
  return (
    <div className=" bg-primary-1 border-y border-blue-300 py-7">
      <div className="w-[95%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        {CommitmentData.map((commitment, id) => (
          <div
            key={id}
            className="flex items-center border border-primary-2 bg-white py-8 rounded-lg shadow-xl hover:translate-y-2 duration-300 justify-center flex-col text-center"
          >
            <div>
              <commitment.icon className="w-10 h-10" />
            </div>
            <h2 className="text-base lg:text-xl font-semibold text-primary-2 mt-4">
              {commitment.title === "Experiences" ? (
                <Experiences value={commitment.value} />
              ) : commitment.title === "Reviews" ? (
                <Review value={commitment.value} />
              ) : (
                <Count value={commitment.value} />
              )}
            </h2>
            <h2 className="text-xl lg:text-2xl font-bold">
              {commitment.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
