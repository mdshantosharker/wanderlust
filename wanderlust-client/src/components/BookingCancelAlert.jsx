"use client";
import React from "react";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
const BookingCancelAlert = ({ bookingId }) => {
  const handleCancelBooking = async () => {
    const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    redirect("http://localhost:3000/my-bookings");
  };
  return (
    <AlertDialog>
      <Button
        className={" rounded-none border-red-500 text-red-500"}
        variant="outline"
      >
        <TrashBin /> Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingCancelAlert;
