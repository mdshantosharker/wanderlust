"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  DateField,
  Description,
  Label,
  toast,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BookingCard = ({ destination }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

  const { price, _id, destinationName, imageUrl, country } = destination;

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };
    console.log(bookingData);

    const res = await fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    console.log(data);
    if (data.insertedId) {
      toast.success("Booking successfully");
      router.push("/destinations");
    }
  };

  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
      <p className="text-sm text-muted">per person</p>

      <form onSubmit={handleBooking}>
        <DateField
          value={departureDate}
          onChange={setDepartureDate}
          className="w-[256px] py-4"
          name="date"
          isRequired
        >
          <Label>Departure Date</Label>

          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>

        <Button type="submit" className="w-full rounded-none bg-cyan-500">
          Book Now
        </Button>
      </form>
    </Card>
  );
};

export default BookingCard;
