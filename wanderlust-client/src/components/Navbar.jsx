import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="shadow-2xl">
      <nav className=" mx-auto container flex justify-between p-5 items-center ">
        <ul className="flex justify-between gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/destinations"}>Destinations</Link>
          <Link href={"/my-bookings"}>My Bookings</Link>
          <Link href={"/add-destination"}>Add Destination</Link>
        </ul>

        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            width={200}
            height={200}
            alt="wanderlust"
          />
        </div>

        <ul className="flex justify-between gap-10">
          <Link href={"/profile"}>Profile</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/signup"}>Sign Up</Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
