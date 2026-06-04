"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  // console.log(session.user);
  const user = session?.user;
  console.log(user);

  const logOut = async (e) => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast("successfully signOut");
          router.push("/signin");
        },
      },
    });
  };
  return (
    <nav className="flex justify-between items-center p-4 container mx-auto">
      <ul className="flex gap-20">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Booking</Link>
        </li>
        <li>
          <Link href={"/admin"}>Admin</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destinations</Link>
        </li>
      </ul>

      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          alt="Wanderlast"
          width={200}
          height={100}
        />
      </div>

      {user ? (
        <>
          <ul className="flex items-center gap-10">
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <li>
              <Link onClick={logOut} href={"/signin"}>
                Logout
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="flex gap-10">
            <li>
              <Link href={"/signin"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
