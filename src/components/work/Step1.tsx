import React, { useRef, useState } from "react";
import { useWizard } from "react-use-wizard";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title is required.",
  }),
  video: z
    .string({
      required_error: "Please enter a video count.",
    })
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "video count must be a positive number.",
    }),
  price: z
    .string({
      required_error: "Please enter the price.",
    })
    .refine((value) => !isNaN(Number(value)), {
      message: "Price must be a positive number.",
    }),
  days: z.string({
    required_error: "Please select days.",
  }),
});

export default function Step1({
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
  const { nextStep } = useWizard();
  const closeDialogRef = useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: work.name,
      video: "",
      price: "0",
      days: "1 days",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({
      ...data,
      video: Number(data.video),
      price: Number(data.price),
    });
    closeDialogRef.current?.click();
  }

  function calculatePrice() {
    const days = Number(form.getValues("days").replace(/\D/g, "")) || 1;
    const videoCount = Number(form.getValues("video"));
    const basePrice = work.price;
    const discount = work.dayIncrementDiscount;

    const calculatedPrice =
      days === 1
        ? basePrice * videoCount
        : basePrice * videoCount * days - discount * (days - 1);

    form.setValue("price", calculatedPrice.toString());
  }

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a title"
                    className="w-full text-slate-950 font-medium border-slate-300"
                    disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Video Field */}
          <FormField
            control={form.control}
            name="video"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video Count</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter video count"
                    className="w-full"
                    {...field}
                    onChange={(e) => {
                      const videoCount = Number(e.target.value) || 0;
                      field.onChange(videoCount.toString());
                      calculatePrice();
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Days Field */}
          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Days</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    calculatePrice();
                  }}
                  value={field.value || "1 days"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select days" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1 days">1 day</SelectItem>
                    <SelectItem value="3 days">3 days</SelectItem>
                    <SelectItem value="5 days">5 days</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price Field */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price"
                    className="w-full text-slate-950 font-medium border-slate-300"
                    disabled
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="bg-primary-2 mt-5 w-[20%] hover:scale-105 hover:bg-primary-2 transition-all duration-500"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>

      {/* Hidden Button for Dialog Close */}
      <button
        ref={closeDialogRef}
        onClick={() => nextStep()}
        type="button"
        className="hidden"
      />
    </div>
  );
}
