"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InformationData, navMenu, social } from "@/data/informationData";
import logo from "/public/logo.png";
import Menu from "@/animation/Menu";
import Close from "@/animation/Close";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const navbarBg = scrollY > 1 ? "sticky top-0 shadow-xl" : "";

  return (
    <>
      <div
        className={`text-white py-2 sticky shadow-lg z-50 bg-primary-2 top-0`}
      >
        <nav className="flex items-center w-[95%] mx-auto justify-between">
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-2xl font-bold">{InformationData.Logo}</h1>
          </Link>
          <ul className="hidden lg:flex items-center gap-8">
            {navMenu.map((menu, id) => (
              <li key={id}>
                <Link
                  className="border-b-2 border-transparent rounded-[2px] transition-all duration-300 hover:border-white pb-1"
                  href={menu.url}
                >
                  {" "}
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <ul className="lg:flex hidden items-center gap-4">
              {social.map((social, id) => (
                <li key={id} title={social.name}>
                  <Link
                    href={social.url}
                    className="rounded-full bg-blue-500 p-2 flex items-center justify-center"
                  >
                    <social.icons className="w-5 h-5" />
                  </Link>
                </li>
              ))}
            </ul>
            <button onClick={() => setOpen(!open)} className=" px-3 lg:hidden">
              {!open ? <Menu /> : <Close />}
            </button>
          </div>
        </nav>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`bg-primary-1 h-screen lg:hidden fixed bottom-0 transition-all duration-1000 top-0 left-0 right-0 z-40 ${
          open ? "translate-y-0 " : "translate-y-[-999px]"
        }`}
      >
        <div className=" w-full pt-10 block">
          <ul className="font-medium flex gap-2 flex-col p-4 pb-10 mt-4 border border-white rounded-lg bg-white ">
            {navMenu.map((menu, id) => (
              <li key={id}>
                <Link
                  href={menu.url}
                  onClick={() => setOpen(false)}
                  className={`block py-2 px-3 text-gray-900 rounded bg-primary-1/50 hover:text-white hover:bg-primary-2 `}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            <ul className="flex justify-center mt-5 text-white items-center gap-4">
              {social.map((social, id) => (
                <li key={id} title={social.name}>
                  <Link
                    href={social.url}
                    className="rounded-full bg-primary-2 p-2 flex items-center justify-center"
                  >
                    <social.icons className="w-5 h-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
