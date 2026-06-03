import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  console.log(destinations);
  return (
    <div>
      <h1>Explore All Destinations</h1>
      <p>Find your perfect travel experience from our curated collection</p>

      <div className="grid grid-cols-3 gap-20">
        {destinations.map((des) => (
          <DestinationCard key={des._id} des={des} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
