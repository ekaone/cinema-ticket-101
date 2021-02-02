import React from "react";
import { useProxy } from "valtio";
import { state } from "./store";
// import { Sparkles } from "heroicons-react";

export default function Seats() {
  const snapshot = useProxy(state);
  console.table(snapshot.seats);

  return (
    <div>
      <button onClick={() => snapshot.resetSelected()} className="bg-red-900">
        Reset
      </button>
      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-4">
          {snapshot.seats.map((seat) => (
            <Seat
              key={seat.id}
              number={seat.number}
              occupied={seat.occupied}
              clickSelected={() => snapshot.useSelected(seat.id)}
            />
          ))}
        </div>
      </div>
      <br />
      {snapshot.selected.length}
      <br />
      {JSON.stringify(snapshot.selected)}
      <br />
      {JSON.stringify(snapshot.currentSeats)}
    </div>
  );
}

const Seat = ({ number, occupied, clickSelected, selected }) => (
  <div
    onClick={occupied === false ? clickSelected : null}
    className={
      "flex justify-center items-center rounded-lg box-border h-10 w-10 " +
      (occupied === true
        ? "bg-red-500 cursor-not-allowed"
        : "bg-yellow-500 hover:bg-green-500 cursor-pointer")
    }
  >
    <div className="text-gray-900 text-md">{number}</div>
  </div>
);
