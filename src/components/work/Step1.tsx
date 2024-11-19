import React, { useEffect, useRef } from "react";
import { useWizard } from "react-use-wizard";
import {
  Form,
  FormControl,
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
import { Step } from "@/utils/propsType";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title is required.",
  }),
  video: z
    .string({
      required_error: "Please enter a video count.",
    })
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Video count must be a positive number.",
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

export default function Step1({ work, orderValue, setOrderValue }: Step) {
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

  const videoCount = Number(form.watch("video")) || 0;

  useEffect(() => {
    if (videoCount > 5 && form.getValues("days") === "1 days") {
      form.setValue("days", "7 days"); // Update the value to 7 days
    }
  }, [videoCount, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const value = {
      ...data,
      video: Number(data.video),
      price: Number(data.price),
    };
    setOrderValue({ ...orderValue, ...value });
    closeDialogRef.current?.click();
  }

  function calculatePrice() {
    const videoCount = Number(form.getValues("video"));
    const basePrice = work.price;
    const discount = work.dayIncrementDiscount;

    const calculatedPrice =
      basePrice * videoCount - (videoCount > 5 ? discount * videoCount : 0);

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
                <FormLabel>Plane Title</FormLabel>
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
                    min={1}
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
                    <SelectItem value="1 days" disabled={videoCount > 5}>
                      1 day
                    </SelectItem>
                    <SelectItem value="7 days">7 days</SelectItem>
                    <SelectItem value="30 days">30 days</SelectItem>
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
              className="bg-primary-2 mt-5 max-w-36 hover:scale-105 hover:bg-primary-2 transition-all duration-500"
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
