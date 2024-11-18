import Binance from "@/animation/Binance";
import Mastercard from "@/animation/Mastercard";
import Moneygram from "@/animation/Moneygram";
import Payoneer from "@/animation/Payoneer";
import Western from "@/animation/Western";
import { FooterData, navMenu } from "@/data/informationData";
import Link from "next/link";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-primary-2 text-white py-8">
      <div className="grid grid-cols-2 lg:grid-cols-11 w-[90%] lg:w-[95%] mx-auto justify-around">
        {/* About Section */}
        <div className="col-span-2 lg:col-span-2  text-left my-4">
          <h3 className="text-xl font-semibold mb-5">About Us</h3>
          <p className="text-xs mb-4">{FooterData.description}</p>
        </div>
        {/* Services Section */}
        <div className="lg:col-span-3 lg:ml-16  my-4">
          <h3 className="text-xl font-semibold mb-5">Our Services</h3>
          <ul className="space-y-3">
            {FooterData.Services.map((nav, id) => (
              <li key={id} className="flex items-center gap-1">
                <IoIosCheckmarkCircleOutline className="mb-1" />
                <Link
                  href={nav.url}
                  className="text-white text-xs lg:text-sm  border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful Links Section */}
        <div className="lg:col-span-2 lg:-ml-2 my-4">
          <h3 className="text-xl font-semibold mb-5">Support</h3>
          <ul className="space-y-3">
            {FooterData.support.map((nav, id) => (
              <li key={id} className="flex items-center gap-1">
                <IoIosCheckmarkCircleOutline className="mb-1" />
                <Link
                  href={nav.url}
                  className="text-white text-xs lg:text-sm  border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2 lg:ml-2  my-4">
          <h3 className="text-xl font-semibold mb-5">Order Now</h3>
          <ul className="space-y-3">
            {FooterData.helpLink.map((nav, id) => (
              <li key={id} className="flex items-center gap-1">
                <IoIosCheckmarkCircleOutline className="mb-1" />
                <Link
                  href={nav.url}
                  className="text-white text-xs lg:text-sm  border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div className="text-left lg:col-span-2 -ml-5 md:ml-0 lg:-ml-8 my-4">
          <h3 className="text-xl font-semibold mb-5">Address</h3>
          <ul className="space-y-3">
            {FooterData.Address.map((nav, id) => (
              <li className="flex items-center gap-2" key={id}>
                <nav.icon className="w-5 min-w-5 min-h-5 h-5" />
                <Link
                  href={nav.url}
                  className="text-white text-xs lg:text-sm text-wrap border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 w-[95%] mx-auto my-7" />
      <div className="flex items-center flex-col-reverse md:flex-row gap-4 justify-between w-[95%] mx-auto">
        <p className="text-xs lg:text-sm text-white">
          &copy; 2024 Freelancer Mizan. All rights reserved.
        </p>
        <div className="flex items-center flex-wrap gap-2">
          <Payoneer />
          <Binance /> <Mastercard />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
