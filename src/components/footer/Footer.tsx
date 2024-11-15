import { FooterData, navMenu } from "@/data/informationData";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-primary-2 text-white py-8">
      <div className="grid grid-cols-9 w-[95%] mx-auto justify-around">
        {/* About Section */}
        <div className=" col-span-3  m-4">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm mb-4">{FooterData.description}</p>
        </div>

        {/* Helpful Links Section */}
        <div className="col-span-2  m-4">
          <h3 className="text-lg font-semibold mb-2">Helpful Links</h3>
          <ul className="space-y-2">
            {FooterData.helpLink.map((nav, id) => (
              <li key={id}>
                <Link
                  href={nav.url}
                  className="text-white border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="col-span-2 -ml-5 my-4">
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-2">
            {FooterData.Services.map((nav, id) => (
              <li key={id}>
                <Link
                  href={nav.url}
                  className="text-white border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div className="col-span-2 -ml-8 my-4">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <ul className="space-y-2">
            {FooterData.Address.map((nav, id) => (
              <li className="flex items-center gap-2" key={id}>
                <nav.icon className="w-5 h-5" />
                <Link
                  href={nav.url}
                  className="text-white text-wrap border-b-2 transition-all duration-300 pb-1 border-transparent hover:border-white"
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
        <p className="text-sm text-white">
          &copy; 2024 Freelancer Mizan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
