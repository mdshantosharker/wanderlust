"use client";

import {
  FieldError,
  ListBox,
  TextArea,
  Input,
  Button,
  Select,
  Label,
  TextField,
  Card,
} from "@heroui/react";
import React from "react";

const AddDestinationPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

    const res = await fetch("http://localhost:5000/destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl tracking-tight">
            Add New Destination
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Fill in the details below to create a beautiful new travel package.
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-slate-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField
                  name="destinationName"
                  className="flex flex-col gap-2"
                  isRequired
                >
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Destination Name
                  </Label>
                  <Input
                    placeholder="e.g. Bali Paradise"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                  />
                  <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-2">
                <TextField name="country" isRequired>
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Country
                  </Label>
                  <Input
                    placeholder="e.g. Indonesia"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                  />
                  <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>
              </div>

              {/* Category */}
              <div className="flex flex-col gap-2">
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Category
                  </Label>
                  <Select.Trigger className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200">
                    <Select.Value className="text-slate-600" />
                    <Select.Indicator className="text-slate-400" />
                  </Select.Trigger>

                  <Select.Popover className="bg-white border border-slate-100 shadow-xl rounded-xl mt-2 overflow-hidden">
                    <ListBox className="py-1">
                      {[
                        "Beach",
                        "Mountain",
                        "City",
                        "Adventure",
                        "Cultural",
                        "Luxury",
                      ].map((cat) => (
                        <ListBox.Item
                          key={cat}
                          id={cat}
                          textValue={cat}
                          className="px-4 py-2.5 text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer flex justify-between items-center transition-colors"
                        >
                          {cat}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-2">
                <TextField name="price" type="number" isRequired>
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Price (USD)
                  </Label>
                  <Input
                    type="number"
                    placeholder="1299"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                  />
                  <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-2">
                <TextField name="duration" isRequired>
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Duration
                  </Label>
                  <Input
                    placeholder="e.g. 7 Days / 6 Nights"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                  />
                  <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>
              </div>

              {/* Departure Date */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Departure Date
                  </Label>
                  <Input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 text-slate-600"
                  />
                  <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <TextField name="imageUrl" isRequired>
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Image URL
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50"
                  />
                  <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <TextField name="description" isRequired>
                  <Label className="text-sm font-semibold text-slate-700 tracking-wide">
                    Description
                  </Label>
                  <TextArea
                    placeholder="Describe the travel experience, highlights, and itinerary..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-slate-50/50 min-h-30 resize-y"
                  />
                  <FieldError className="text-xs text-red-500 mt-1" />
                </TextField>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full py-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium text-base rounded-xl shadow-lg shadow-cyan-500/20 transform active:scale-[0.98] transition-all duration-150 flex justify-center items-center gap-2 border-none"
              >
                Create Destination Package
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddDestinationPage;
