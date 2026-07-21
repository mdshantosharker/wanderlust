"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  toast,
} from "@heroui/react";
import React from "react";

const AddDestinationPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/destination`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    const data = await res.json();
    console.log(data);
    if (data.insertedId) {
      toast.success("destination added successfully");
    }
  };
  return (
    <div className="bg-gray-300 pb-30">
      <h1 className="text-center text-5xl font-bold py-10">
        AddDestinationPage
      </h1>
      <div className="mx-auto  max-w-3xl shadow-2xl bg-white rounded-2xl">
        <form onSubmit={handleSubmit} className="p-10  space-y-8 w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            variant="outline"
            className=" rounded-none w-full bg-cyan-500 text-white"
          >
            Add Destination
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddDestinationPage;
