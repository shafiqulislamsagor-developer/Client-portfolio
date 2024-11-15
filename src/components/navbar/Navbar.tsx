"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InformationData, navMenu, social } from "@/data/informationData";

export default function Navbar() {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const navbarBg = scrollY > 1 ? "sticky top-0 shadow-xl" : "";

  return (
    <div className={`text-white py-2 sticky shadow-lg z-50 bg-primary-2 top-0`}>
      <nav className="flex items-center w-[95%] mx-auto justify-between">
        <Link href={"/"} className="flex items-center gap-3">
          <Image
            src="https://fakeimg.pl/250x100/"
            alt="logo"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold">{InformationData.Logo}</h1>
        </Link>
        <ul className="flex items-center gap-8">
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
        <ul className="flex items-center gap-4">
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
      </nav>
    </div>
  );
}
