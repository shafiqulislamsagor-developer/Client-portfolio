import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wizard } from "react-use-wizard";
import { ScrollArea } from "../ui/scroll-area";
import Lottie from "lottie-react";

import Step1 from "./Step1";
import Step2 from "./Step2";

export function PlanFrom({
  work,
}: {
  work: {
    name: string;
    animation: any;
    plane: boolean;
    price: number;
    dayIncrementDiscount: number;
  };
}) {
  const [orderValue, setOrderValue] = useState({
    title: "",
    product: 0,
    price: 0,
    days: "",
    videoLink: "",
    agree: false,
  });

  if (orderValue.agree) {
    console.log(orderValue);
    setOrderValue({
      title: "",
      product: 0,
      price: 0,
      days: "",
      videoLink: "",
      agree: false,
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`bg-white border-b-8 z-20 shadow-xl relative hover:scale-105 duration-300 min-h-60 lg:min-h-72 rounded-sm px-4 gap-5 border-primary-2 ${
            work.plane ? "cursor-pointer" : "cursor-help"
          } flex flex-col items-center justify-center`}
        >
          <div className="absolute top-0 z-20 right-0 bg-primary-2 text-white text-xs md:text-sm px-2 h-7 flex flex-col items-center justify-center rounded-se-sm rounded-bl-lg rounded-t-none">
            select plane
          </div>
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
      </DialogTrigger>
      <DialogContent className="w-[95%] mx-auto sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-sm lg:text-xl">
            {work.name} Planing Form
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <Wizard>
            <Step1
              work={work}
              orderValue={orderValue}
              setOrderValue={setOrderValue}
            />
            <Step2
              work={work}
              orderValue={orderValue}
              setOrderValue={setOrderValue}
            />
          </Wizard>
        </ScrollArea>
        <DialogFooter>
          {/* <DialogClose
            ref={closeDialogRef} // Attach the ref here
            type="button"
            className="hidden"
          /> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
