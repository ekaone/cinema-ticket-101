import React from "react";
import ReactPlayer from "react-player/youtube";

export default function Movies() {
  return (
    <div className="flex justify-center py-6">
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
}
