import React from "react";

export default function Container({ children }) {
  return (
    <div className="v-screen bg-gradient-to-r from-gray-900 to-green-900 p-5">
      {children}
    </div>
  );
}
