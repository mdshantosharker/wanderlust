import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  console.log(session?.user?.id);
  const res = await fetch(`http://localhost:5000/booking/${userId}`);
  const data = await res.json();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font font-bold text-center">My Bookings</h1>
    </div>
  );
};

export default MyBookings;
