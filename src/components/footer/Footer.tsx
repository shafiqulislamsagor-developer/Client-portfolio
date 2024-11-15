import { navMenu } from "@/data/informationData";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-8">
      <div className="grid grid-cols-9 w-[95%] mx-auto justify-around">
        {/* About Section */}
        <div className=" col-span-3  m-4">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm mb-4">
            We are one of the prominent travel agencies, having arranged over
            1500 trips successfully. Our personalized tours ensure the best
            experiences. Join us to make your vacation unforgettable.
          </p>
        </div>

        {/* Helpful Links Section */}
        <div className="col-span-2  m-4">
          <h3 className="text-lg font-semibold mb-2">Helpful Links</h3>
          <ul className="space-y-2">
            {navMenu.map((nav, id) => (
              <li key={id}>
                <Link
                  href={nav.url}
                  className="text-slate-300 hover:text-primary-2"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="col-span-2 m-4">
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#photography"
                className="text-slate-300 hover:text-primary-2"
              >
                Photography
              </a>
            </li>
            <li>
              <a
                href="#support"
                className="text-slate-300 hover:text-primary-2"
              >
                Support 24/7
              </a>
            </li>
            <li>
              <a href="#guide" className="text-slate-300 hover:text-primary-2">
                Guide
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="col-span-2 m-4">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <ul className="space-y-2">
            <li>
              <a href="#terms" className="text-slate-300 hover:text-primary-2">
                abs@gmail.com
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="text-slate-300 hover:text-primary-2"
              >
                +880165656565
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="text-slate-300 hover:text-primary-2"
              >
                Sherpur Sadar , Mymensingh , Dhaka , Bangladesh
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 w-[95%] mx-auto my-8" />
      <div className="text-center">
        <p className="text-sm text-gray-800">
          &copy; 2024 Your Travel Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
