"use client";

import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ProjectCategory, ProjectData } from "@/data/informationData";
import { Button } from "../ui/button";
import { MdOutlineExpandMore } from "react-icons/md";

export default function Project() {
  const [filterValue, setFilterValue] = useState("All");
  const [more, setMore] = useState(4);

  const filteredProjects = ProjectData.filter((project) => {
    if (filterValue === "All") {
      return true;
    }
    return project.title.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div id="project" className="py-10 lg:py-20 w-[95%] mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
        <span className="border-b-2 border-primary-2 pb-2 px-8 uppercase">
          Portfolio
        </span>
      </h2>
      <div className="mb-10 flex items-center gap-3 justify-center">
        {ProjectCategory.map((button, id) => (
          <Button
            key={id}
            onClick={() => setFilterValue(button.title)}
            className={`${
              filterValue === button.title
                ? "bg-primary-2 hover:bg-primary-2"
                : "bg-transparent text-primary-2 border border-primary-2  hover:text-primary-2 hover:bg-transparent"
            }  text-xs lg:text-base hover:scale-105  w-auto duration-500 transition-all lg:px-5 h-[40px]      `}
          >
            {button.buttonName}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProjects.slice(0, more).map((project, id) => (
          <Modal
            key={id}
            img={project.image}
            title={project.title}
            url={project.url}
          />
        ))}
      </div>
      {filteredProjects.length > 4 && (
        <div className="flex items-center justify-center mt-5">
          <Button
            onClick={() => {
              filteredProjects.length !== more ? setMore(more + 4) : setMore(4);
            }}
            className="bg-primary-2 text-xs lg:text-base hover:scale-105 hover:bg-primary-2 w-full md:w-auto duration-500 transition-all px-5 h-[40px]"
          >
            {filteredProjects.length !== more ? (
              <>
                More
                <MdOutlineExpandMore className="!w-6 !h-8" />
              </>
            ) : (
              <>
                Less
                <MdOutlineExpandMore className="!w-6 !h-8 rotate-180" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
