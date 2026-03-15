import React from "react";

const blobs = [
  {
    className: "absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/40 to-purple-200/40",
    delay: "0s",
  },
  {
    className: "absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/30 to-indigo-200/30",
    delay: "3s",
  },
  {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-purple-200/20 to-pink-200/20",
    delay: "6s",
  },
];

function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`${blob.className} rounded-full blur-3xl animate-blob`}
          style={{ animationDelay: blob.delay }}
        />
      ))}
    </div>
  );
}

export default AnimatedBlobs;
