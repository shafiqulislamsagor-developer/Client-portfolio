import Image from "next/image";
import React from "react";
import { Modal } from "../Modal/Modal";

export default function Project() {
  return (
    <div id="project" className="py-20 w-[95%] mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">
        <span className="border-b-2 border-primary-2 pb-2 px-8 uppercase">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Modal />
      </div>
    </div>
  );
}
