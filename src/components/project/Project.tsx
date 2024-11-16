import React from "react";
import { Modal } from "../Modal/Modal";
import { ProjectData } from "@/data/informationData";

export default function Project() {
  return (
    <div id="project" className="py-10 lg:py-20 w-[95%] mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
        <span className="border-b-2 border-primary-2 pb-2 px-8 uppercase">
          Portfolio
        </span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {ProjectData.map((project, id) => (
          <Modal
            key={id}
            img={project.image}
            title={project.title}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
