"use client";

import Loading from "@/animation/Loading";
import React, { useState } from "react";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact.json";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async () => {
    try {
      const res = await emailjs.send(
        "service_sxevxkb",
        "template_ootozbo",
        formData,
        "ouVU9SQ060dTMnTDi"
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setLoading(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          agree: false,
        });
      }
    } catch (error: any) {
      toast.error(error?.text || error);
    }
  };

  const buttonHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    sendEmail();
  };

  console.log(loading);

  return (
    <div id="contact" className="w-[95%] mx-auto text-slate-900">
      <div className="flex flex-col justify-between items-center rounded-md py-4 md:flex-row md:py-10  lg:py-20">
        {/* Form Section */}
        <div className="w-full rounded-xl bg-white p-6 shadow-md md:w-[45%] mx-auto md:p-8">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact Me !</h2>
          <form onSubmit={buttonHandler}>
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                required
                name="name"
                placeholder="Name*"
                className="col-span-1 rounded-md border p-3 focus:outline-none md:col-span-2"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone*"
                className="rounded-md col-span-2 border p-3 focus:outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                required
                name="email"
                placeholder="Email*"
                className="rounded-md border col-span-2 p-3 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message*"
              className="mb-4 w-full rounded-md border p-3 focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="agree"
                required
                className="mr-2"
                checked={formData.agree}
                onChange={() =>
                  setFormData({ ...formData, agree: !formData.agree })
                }
              />
              <label>
                I agree that my personal information will be processed and
                stored.
              </label>
            </div>
            <Button
              type="submit"
              className="bg-primary-2 hover:scale-105 hover:bg-primary-2 w-full md:w-auto duration-500 transition-all px-5 h-[40px]"
            >
              {loading ? <Loading /> : "Send"}
            </Button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 flex w-full flex-col items-center justify-start space-y-8 md:mt-0 md:w-1/2">
          <Lottie animationData={contactAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
}