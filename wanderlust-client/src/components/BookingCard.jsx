"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //   console.log(user);

  const [departureDate, setDepartureDate] = useState(null);
  //   console.log(departureDate);
  const { price, _id, destinationName, imageUrl, country } = destination;

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = {
      userId: user?.id,
      UserName: user?.name,
      userImage: user?.image,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const booking =await res.json();
    toast.success('successfully booked')
    console.log(booking);
  };
  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
      <p className="text-sm text-muted">per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className={"w-full rounded-none bg-cyan-500"}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
