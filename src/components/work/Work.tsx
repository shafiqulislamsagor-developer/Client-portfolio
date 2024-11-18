"use client";

import Lottie from "lottie-react";
import React from "react";
import { PlanFrom } from "./PlanFrom";
import Link from "next/link";
import { workMenu } from "@/data/informationData";

interface WorkItem {
  name: string;
  animation: any;
  plane: boolean;
  price: number;
  dayIncrementDiscount: number;
}

export default function Work() {
  // const [workdata, setWorkData] = useState<WorkItem[]>([]);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work`, {
  //         cache: "no-store",
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to fetch Work data");
  //       }

  //       const data: WorkItem[] = await res.json();
  //       setWorkData(data);
  //     } catch (err: any) {
  //       setError(err.message || "Something went wrong");
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div></div>;
  // }

  // if (!workdata.length) {
  //   return <div></div>;
  // }

  return (
    <div className="bg-primary-1 border-y border-blue-300">
      <div className="grid w-[95%] py-10 mx-auto grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-7">
        {workMenu.map((work, id) =>
          work.plane ? (
            <PlanFrom work={work} key={id} />
          ) : (
            <div
              key={id}
              className={`bg-white border-b-8 z-20 shadow-xl relative hover:scale-105 duration-300 min-h-60 lg:min-h-72 rounded-sm px-4 gap-5 border-primary-2 cursor-help flex flex-col items-center justify-center`}
            >
              <Link
                href={"#contact"}
                className="absolute top-0 z-20 right-0 bg-primary-2 text-white text-xs md:text-sm px-2 h-7 flex flex-col items-center justify-center rounded-se-sm rounded-bl-lg rounded-t-none"
              >
                Contact Me
              </Link>
              <div className="flex flex-col justify-between space-y-2">
                <Lottie
                  className={`mx-auto ${
                    work.name !== "Optimization" ? "w-32 h-40" : "w-40 h-40"
                  }`}
                  animationData={work.animation}
                  loop={true}
                />
              </div>
              <h1 className="text-lg lg:text-3xl font-semibold">{work.name}</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
}
