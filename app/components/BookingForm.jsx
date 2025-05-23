"use client";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { toast } from "react-hot-toast";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const addToBooking = () => {
    if (!startDate || !endDate) {
      toast.error("Enter both start and end dates");
      return;
    }

    if (endDate <= startDate) {
      toast.error("The end date must be after the start date");
      return;
    }

    toast.success("Booking added successfully!");
  };

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-sm space-y-4 text-black">
        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            className="border p-2 rounded w-full"
            placeholderText="Start date"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            className="border p-2 rounded w-full"
            placeholderText="End date"
          />
        </div>

        <button
          onClick={addToBooking}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
