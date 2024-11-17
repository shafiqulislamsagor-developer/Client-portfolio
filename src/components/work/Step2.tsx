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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "../ui/checkbox";
import { FAQData, InformationData } from "@/data/informationData";
import { DialogClose } from "../ui/dialog";
import toast from "react-hot-toast";
import { Step } from "@/utils/propsType";

const FormSchema = z.object({
  videoLink: z.string().min(2, {
    message: "video is required.",
  }),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must give permission to proceed.",
  }),
});

export default function Step2({ work, orderValue, setOrderValue }: Step) {
  const closeDialogRef = useRef<HTMLButtonElement>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      videoLink: "",
      agree: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setOrderValue({ ...orderValue, ...data });
    toast.success("Order completed successfully");
    closeDialogRef.current?.click();
  }

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          {/* video Field */}
          <FormField
            control={form.control}
            name="videoLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a video link"
                    className="w-full "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Agree Field */}
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-2 leading-none">
                  <FormLabel>
                    I have given you permission to your email
                  </FormLabel>
                  <FormDescription>
                    You need YouTube channel permission to do video SEO. Please
                    grant me editor permission to the email address below
                  </FormDescription>
                  <FormLabel>
                    <h2 className="pt-2"> {InformationData.email}</h2>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <FormLabel>FAQ</FormLabel>
            <Accordion
              type="single"
              collapsible
              className="w-full border px-3 pb-0 rounded-md"
            >
              {FAQData.map(
                (FAQ, id) =>
                  FAQ.workTitle === work.name && (
                    <AccordionItem
                      className="last:border-b-0"
                      key={id}
                      value={`${id}`}
                    >
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                  )
              )}
            </Accordion>
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="bg-primary-2 mt-5 w-[20%] hover:scale-105 hover:bg-primary-2 transition-all duration-500"
            >
              Order Now
            </Button>
          </div>
        </form>
      </Form>

      {/* Hidden Button for Dialog Close */}

      <DialogClose ref={closeDialogRef} type="button" className="hidden" />
    </div>
  );
}
