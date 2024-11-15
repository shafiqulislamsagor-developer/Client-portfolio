import React from "react";
import CustomProgress from "../Customprogress/CustomProgress";
import { SkillsData } from "@/data/informationData";

export default function Skill() {
  return (
    <div className="my-16 w-[95%] mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">
        <span className="border-b-2 border-primary-2 pb-2 px-8 uppercase">
          skills
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SkillsData.map((skill, id) => (
          <CustomProgress key={id} value={skill.value} title={skill.title} />
        ))}
      </div>
    </div>
  );
}
