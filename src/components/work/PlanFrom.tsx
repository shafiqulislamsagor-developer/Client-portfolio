import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import React from "react";
import Lottie from "lottie-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function PlanFrom({
  work,
}: {
  work: {
    name: string;
    animation: any;
    plane: boolean;
  };
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
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
            {work.name} Planing From
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          {" "}
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Link href={"#"}>
            <Button className="bg-primary-2 hover:scale-105 hover:bg-primary-2 duration-500 transition-all">
              <DialogClose className="bg-transparent">Visit Now</DialogClose>
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
