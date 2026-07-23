import CancleBooking from "@/components/CancleBooking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  console.log(session?.user?.id);
  const res = await fetch(`http://localhost:5000/booking/${userId}`);
  const bookings = await res.json();
  console.log(bookings);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Bookings</h1>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking?._id}
            className="flex items-center gap-5 border rounded-lg p-3 shadow-sm bg-white"
          >
            <Image
              src={booking?.imageUrl}
              width={170}
              height={110}
              alt={booking?.destinationName}
              className="rounded-md object-cover w-42.5 h-27.5"
            />

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                  ✓ Confirmed
                </span>
              </div>

              <h2 className="text-xl font-bold mt-2">
                {booking?.destinationName}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                📅 Departure:{" "}
                {new Date(booking.departureDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <p className="text-sm text-gray-500">
                📍 Booking ID: {booking?._id}
              </p>

              <p className="text-xl font-bold text-cyan-600 mt-1">
                ${booking?.price}
              </p>
            </div>

            <div className="flex gap-2">
              <CancleBooking id={booking?._id} />

              <Link href={`/destinations/${booking?.destinationId}`}>
                <button className="bg-cyan-600 text-white cursor-pointer px-4 py-2 text-sm rounded hover:bg-cyan-700">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
