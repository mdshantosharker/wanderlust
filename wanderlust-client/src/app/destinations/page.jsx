import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationsPage = async () => {
  const res = await fetch(`http://localhost:5000/destination`);
  const destinations = await res.json();
  console.log(destinations);
  return (
    <div className="mb-20">
      <h1 className="font-bold text-center text-5xl py-10">All Destinations</h1>

      <div className="grid grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
