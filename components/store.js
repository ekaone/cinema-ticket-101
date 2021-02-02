import { proxy } from "valtio";

export const state = proxy({
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
  selected: [],
  useSelected: function (id) {
    const order = this.seats.find((seat) => seat.id === id);
    const idx = this.seats.findIndex((s) => s.id === id);
    state.seats[idx].occupied = true;
    state.selected.push({ ...order, occupied: true });
  },
  get currentSeats() {
    return this.selected;
  },
  resetSelected: function () {
    return state.selected.length > 0
      ? state.selected.splice(0, state.selected.length)
      : "";
  },
});
