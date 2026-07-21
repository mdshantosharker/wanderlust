
import DeleteModal from "@/components/DeleteModal";
import EditForm from "@/components/EditForm";
import { CalendarDays, Check, MapPin, Pencil, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);

  const destination = await res.json();

  const {
    imageUrl,
    _id,
    price,
    destinationName,
    duration,
    country,
    description,
    departureDate,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      {/* Hero Image */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={1400}
          height={700}
          className="w-full h-112.5 object-cover rounded-2xl shadow-xl"
        />

        <div className="absolute top-5 right-5 z-20 flex gap-3">
          <EditForm destination={destination} />
          <DeleteModal id={_id} />
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        {/* Left Side */}
        <div className="lg:col-span-2">
          {/* Country */}
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={18} />
            <span>{country}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mt-2">{destinationName}</h1>

          {/* Rating & Duration */}
          <div className="flex flex-wrap items-center gap-6 mt-5 text-gray-600">
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
              <span>4.9 (234 Reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{duration}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>

            <p className="text-gray-600 leading-8">{description}</p>
          </div>

          {/* Highlights */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Highlights</h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Luxury beachfront accommodation",
                "Private beach dinner",
                "Visit famous tourist attractions",
                "Airport pickup included",
                "Sunrise mountain tour",
                "Professional local guide",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="text-green-500" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div>
          <div className="sticky top-24 rounded-2xl border bg-white shadow-xl p-6">
            <p className="text-gray-500">Starting From</p>

            <h2 className="text-5xl font-bold text-cyan-600 mt-2">${price}</h2>

            <p className="text-sm text-gray-500">per person</p>

            <input
              type="date"
              defaultValue={departureDate}
              className="mt-6 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button className="mt-6 w-full rounded-xl bg-cyan-600 py-3 text-white font-semibold transition hover:bg-cyan-700">
              Book Now →
            </button>

            <div className="mt-6 space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Free cancellation up to 7 days
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Travel insurance included
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                24/7 customer support
              </div>

              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Instant booking confirmation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailsPage;
