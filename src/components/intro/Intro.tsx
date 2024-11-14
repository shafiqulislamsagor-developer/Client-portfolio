import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <div className="w-[95%] mx-auto my-20  gap-10 flex items-center justify-between">
      <div className="w-2/5">
        <Image
          src="https://fakeimg.pl/250x100/"
          alt="logo"
          width={50}
          height={50}
          className="w-[90%] rounded-lg h-[400px]"
        />
      </div>
      <div className="w-3/5">
        <h1 className="text-3xl text-primary-2 leading-snug">
          Hello, I’m <br />
          <span className="font-bold text-4xl text-slate-900">
            {" "}
            Mizanur Rahman
          </span>
        </h1>
        <h3 className="text-xl mt-3 mb-1 font-medium">
          Social Media Marketer from{" "}
          <span className="text-primary-2">Bangladesh</span>
        </h3>
        <p className="text-slate-700">
          For the past 5 years I have been working on YouTube video SEO,
          optimization, keyword research, YouTube channel creation, setup, all
          social media creation and setup, logo and banner design. I work
          according to customer needs. I have completed extensive training on
          Total Digital Marketing from Outsourcing Institute and participated in
          many practical projects. I can work for a big organization with full
          responsibility. I am very hardworking. So my work style is different
          from everyone else.
        </p>
      </div>
    </div>
  );
}
