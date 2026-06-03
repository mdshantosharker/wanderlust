import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
import { Button, Calendar } from "@heroui/react";

const DestinationCard = ({ des }) => {
  const { _id, imageUrl, price, destinationName, duration, country } = des;
  return (
    <div className="border">
      <Image alt={destinationName} src={imageUrl} height={200} width={500} />

      <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar /> {duration}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">$ {price}</h3>
          </div>
        </div>
        <Link href={`/destinations/${_id}`}>
          <Button variant="ghost" className={"mt-1 text-cyan-500"}>
            {" "}
            <FiExternalLink /> Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
