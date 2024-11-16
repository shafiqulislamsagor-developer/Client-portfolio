import { FooterData, navMenu } from "@/data/informationData";
import Link from "next/link";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-primary-2 text-white py-8">
      <div className="grid grid-cols-2 lg:grid-cols-9 w-[90%] lg:w-[95%] mx-auto justify-around">
        {/* About Section */}
        <div className="col-span-2 lg:col-span-3 text-center lg:text-left my-4">
          <h3 className="text-xl font-semibold mb-5">About Us</h3>
          <p className="text-sm mb-4">{FooterData.description}</p>
        </div>

        {/* Helpful Links Section */}
        <div className="lg:col-span-2 lg:ml-14  my-4">
          <h3 className="text-xl font-semibold mb-5">Order Now</h3>
          <ul className="space-y-3">
            {FooterData.helpLink.map((nav, id) => (
              <li key={id} className="flex items-center gap-1">
                <IoIosCheckmarkCircleOutline className="mb-1" />
                <Link
                  href={nav.url}
                  className="text-white text-sm lg:text-base border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="lg:col-span-2 lg:-ml-8 my-4">
          <h3 className="text-xl font-semibold mb-5">Our Services</h3>
          <ul className="space-y-3">
            {FooterData.Services.map((nav, id) => (
              <li key={id} className="flex items-center gap-1">
                <IoIosCheckmarkCircleOutline className="mb-1" />
                <Link
                  href={nav.url}
                  className="text-white text-sm lg:text-base border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div className="text-left col-span-2 lg:-ml-8 my-4">
          <h3 className="text-xl font-semibold mb-5">Address</h3>
          <ul className="space-y-3">
            {FooterData.Address.map((nav, id) => (
              <li className="flex items-center gap-2" key={id}>
                <nav.icon className="w-5 h-5" />
                <Link
                  href={nav.url}
                  className="text-white text-sm lg:text-base text-wrap border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 w-[95%] mx-auto my-8" />
      <div className="text-center">
        <p className="text-xs lg:text-sm text-white">
          &copy; 2024 Freelancer Mizan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
