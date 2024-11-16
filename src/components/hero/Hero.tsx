"use client";
import React from "react";
import { Button } from "../ui/button";
import working from "../../animation/working.json";
import Lottie from "lottie-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row w-[95%] mx-auto items-center py-20 justify-between">
      <div className="lg:w-1/2 space-y-5">
        <h1 className="text-4xl text-center lg:text-left lg:text-6xl leading-tight font-bold">
          Welcome to My <br />{" "}
          <span className="text-primary-2">Digital Marketing</span> <br />{" "}
          Service
        </h1>
        <p className="lg:w-3/4 text-base lg:text-lg text-center lg:text-left text-slate-600">
          Creating an innovative, functional, and lean business strategy for
          your success.
        </p>
        <div className="flex justify-center lg:justify-normal items-center gap-3">
          <Link href="#contact">
            <Button className="bg-primary-2 text-xs lg:text-base hover:scale-105 hover:bg-primary-2 w-full md:w-auto duration-500 transition-all px-5 h-[40px]">
              Contact Me
            </Button>
          </Link>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                "https://drive.google.com/uc?export=download&id=1Do_IFkoQX4_zBQsf-O831z1sci_q23ql";
              link.click();
            }}
            className="bg-primary-2 text-xs lg:text-base hover:scale-105 hover:bg-primary-2 w-auto duration-500 transition-all lg:px-5 h-[40px]"
          >
            Resume Download
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center justify-end pr-7">
        <Lottie
          className="w-full rounded-lg h-[400px]"
          animationData={working}
          loop={true}
        />
      </div>
    </div>
  );
}
