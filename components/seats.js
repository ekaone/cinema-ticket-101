import React from "react";
import { proxy, useProxy } from "valtio";
// import { Sparkles } from "heroicons-react";

const state = proxy({
  seats: [
    { id: "A1", number: "A1", occupied: true },
    { id: "A2", number: "A2", occupied: true },
    { id: "A3", number: "A3", occupied: false },
    { id: "A4", number: "A4", occupied: false },
    { id: "A5", number: "A5", occupied: true },
    { id: "A6", number: "A6", occupied: true },
    { id: "A7", number: "A7", occupied: false },
    { id: "A8", number: "A8", occupied: false },
    { id: "A9", number: "A9", occupied: true },
    { id: "A10", number: "A10", occupied: true },
    { id: "A11", number: "A11", occupied: false },
    { id: "A12", number: "A12", occupied: true },
    { id: "A13", number: "A13", occupied: true },
    { id: "A14", number: "A14", occupied: false },
    { id: "A15", number: "A15", occupied: false },
    { id: "A16", number: "A16", occupied: false },
    { id: "A17", number: "A17", occupied: true },
    { id: "A18", number: "A18", occupied: true },
  ],
});

export default function Seats() {
  const snapshot = useProxy(state);

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-4 ">
          {snapshot.seats.map((seat) => (
            <Seat key={seat.id} number={seat.number} occupied={seat.occupied} />
          ))}
        </div>
      </div>
      <br />
    </div>
  );
}

const Seat = ({ number, occupied }) => (
  <div
    className={
      "flex justify-center items-center rounded-lg box-border h-10 w-10 " +
      (occupied === false
        ? "bg-red-500 cursor-not-allowed"
        : "bg-yellow-500 hover:bg-green-500 cursor-pointer")
    }
  >
    <div className="text-gray-900 text-md">{number}</div>
  </div>
);
