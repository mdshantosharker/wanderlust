import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  console.log(destinations);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore All Destinations
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {destinations?.map((des) => (
          <DestinationCard key={des._id} des={des} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
