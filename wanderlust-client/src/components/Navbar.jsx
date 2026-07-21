import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="mx-auto container">
      <nav className="flex justify-between p-5 items-center">
        <ul className="flex justify-between gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/destinations"}>Destinations</Link>
          <Link href={"/my-bookings"}>My Bookings</Link>
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
          <li>Profile</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
