import Image from "next/image";
import React from "react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow">
          <MapPin size={16} className="text-red-500" />
          {country}
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
          {category}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {destinationName}
          </h2>

          <span className="rounded-full bg-green-100 px-3 py-1 text-lg font-bold text-green-700">
            ${price}
          </span>
        </div>

        <p className="line-clamp-3 text-gray-600">{description}</p>

        <div className="flex justify-between border-y py-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock3 size={18} className="text-blue-600" />
            {duration}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={18} className="text-orange-500" />
            {departureDate}
          </div>
        </div>

        <button className="w-full rounded-xl bg-linear-to-r from-sky-500 to-blue-700 py-3 font-semibold text-white transition hover:from-blue-700 hover:to-sky-500">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
