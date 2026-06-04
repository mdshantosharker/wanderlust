import DeleteAlert from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description } =
    destination;
  return (
   <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
  
  <div className="flex items-center gap-3 justify-end mb-6">
    <EditModal destination={destination} />
    <DeleteAlert destination={destination} />
  </div>

 
  <div className="relative w-full h-87.5 md:h-125 rounded-3xl overflow-hidden shadow-md mb-8 md:mb-12">
    <Image
      className="w-full h-full object-cover"
      alt={destinationName}
      src={imageUrl}
      priority
      fill
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
  </div>

  {/* Main Layout Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
    
    {/* Left Column: Content Details (Takes 2 columns on desktop) */}
    <div className="lg:col-span-2 space-y-6 md:space-y-8">
      <div>
        {/* Country/Location Tag */}
        <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-2">
          <LuMapPin className="text-base" />
          <span>{country}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
          {destinationName}
        </h1>

        {/* Duration Meta */}
        <div className="flex gap-2 items-center text-sm md:text-base text-slate-500 font-medium mt-4">
          <FaRegCalendar className="text-cyan-500" />
          <span>{duration}</span>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Description Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight mb-4">
          Overview
        </h2>
        <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-none whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>

    {/* Right Column: Sticky Sidebar for Pricing & Actions */}
    <div className="lg:col-span-1 lg:sticky lg:top-8">
      {/* Dynamic Placeholder for Booking Card if not active */}
      <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/50 space-y-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Price</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-900">${price || "00"}</span>
            <span className="text-sm font-medium text-slate-400">/ person</span>
          </div>
        </div>

        {/* <BookingCard destination={destination} /> */}
        
        {/* Standard Fallback Action Button */}
        <button className="w-full bg-slate-950 hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2">
          Proceed to Booking
        </button>
      </div>
    </div>

  </div>
</div>
  );
};

export default DetailsPage;
