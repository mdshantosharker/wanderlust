"use client";
import { authClient } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("successfully Logout");
          router.push("/login"); 
        },
      },
    });
  };

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

        {user ? (
          <>
            <div className="flex gap-3">
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogout} variant="danger-soft">
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <ul className="flex justify-between gap-10">
              <Link href={"/profile"}>Profile</Link>
              <Link href={"/login"}>Login</Link>
              <Link href={"/signup"}>Sign Up</Link>
            </ul>
          </>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
