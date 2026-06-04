import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@heroui/react";

const DestinationCard = ({ des }) => {
  const { _id, imageUrl, price, destinationName, duration, country } = des;
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-lg">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
        <Image
          alt={destinationName}
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col grow p-5">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
          <div className="flex items-center gap-1 text-cyan-600">
            <LuMapPin className="text-sm" />
            <span>{country}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegCalendar />
            <span>{duration}</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 line-clamp-1 mb-4">
          {destinationName}
        </h2>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 leading-none mb-0.5">
              Price
            </p>
            <p className="text-xl font-black text-slate-900">${price}</p>
          </div>

          <Link href={`/destinations/${_id}`} className="shrink-0">
            <Button
              variant="ghost"
              className="flex items-center gap-1.5 bg-slate-900 text-white hover:bg-cyan-600 hover:text-white font-medium rounded-lg px-4 py-2 text-sm transition-colors duration-200"
            >
              <span>Book Now</span>
              <FiExternalLink className="text-xs" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
