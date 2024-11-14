import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navMenu, social } from "@/data/informationData";

export default function Navbar() {
  return (
    <div className="text-white py-2 bg-[#0077FF]">
      <nav className="flex items-center w-[95%] mx-auto justify-between">
        <Link href={"/"} className="flex items-center gap-3">
          <Image
            src="https://fakeimg.pl/250x100/"
            alt="logo"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold">Freelancer Mizan</h1>
        </Link>
        <ul className="flex items-center gap-8">
          {navMenu.map((menu, id) => (
            <li key={id}>
              <Link href={menu.url}> {menu.name}</Link>
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
