"use client";
import React from "react";
import { Button } from "../ui/button";
import working from "../../animation/working.json";
import Lottie from "lottie-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex  w-[95%] mx-auto items-center py-20 justify-between">
      <div className="w-1/2 space-y-5">
        <h1 className="text-6xl leading-tight font-bold">
          Welcome to My <br />{" "}
          <span className="text-primary-2">Digital Marketing</span> <br />{" "}
          Service
        </h1>
        <p className="w-3/4 text-lg text-slate-600">
          Creating an innovative, functional, and lean business strategy for
          your success.
        </p>
        <div className="flex items-center gap-3">
          <Link href="#contact">
            <Button className="bg-primary-2 hover:scale-105 hover:bg-primary-2 w-full md:w-auto duration-500 transition-all px-5 h-[40px]">
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
            className="bg-primary-2 hover:scale-105 hover:bg-primary-2 w-full md:w-auto duration-500 transition-all px-5 h-[40px]"
          >
            Resume Download
          </Button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end pr-7">
        <Lottie
          className="w-full rounded-lg h-[400px]"
          animationData={working}
          loop={true}
        />
      </div>
    </div>
  );
}
