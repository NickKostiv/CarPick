import Link from "next/link";
import Image from "next/image";
import { MdCarRental } from "react-icons/md";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <MdCarRental size={32} color="blue" />
        <p className=" to-black font-serif bold text-[21px]">PickCar</p>
      </Link>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
