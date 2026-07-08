import BookingCard from "@/components/BookingCard";
import DeleteAlert from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  // const { token } = await auth.api.getToken({
  //   headers: await headers(),
  // });
  // console.log(token);

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description } =
    destination;
  console.log(imageUrl);
  console.log(destinationName);
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-20">
      <div className="flex items-center gap-3 justify-end mt-6 mb-5">
        <EditModal destination={destination} />
        <DeleteAlert destination={destination} />
      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <Image
          className="w-full h-65 md:h-105 object-cover hover:scale-105 duration-500"
          alt={destinationName}
          src={imageUrl}
          height={500}
          width={1200}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-md p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            <LuMapPin size={18} />
            <span>{country}</span>
          </div>

          <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {destinationName}
              </h1>

              <div className="flex items-center gap-2 mt-3 text-zinc-600 dark:text-zinc-400">
                <FaRegCalendar />
                <span>{duration}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 my-8"></div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>

            <p className="text-zinc-600 dark:text-zinc-400 leading-8 text-[15px]">
              {description}
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-md border border-zinc-200 dark:border-zinc-800 p-4">
            <BookingCard destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
