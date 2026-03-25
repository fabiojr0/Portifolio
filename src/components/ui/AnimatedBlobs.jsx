import React from "react";

const blobs = [
  {
    className: "absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-red-200/25 to-rose-200/25 dark:from-red-800/15 dark:to-rose-800/15",
    delay: "0s",
  },
  {
    className: "absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-rose-200/20 to-rose-200/20 dark:from-rose-800/10 dark:to-rose-800/10",
    delay: "4s",
  },
  {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-rose-200/15 to-red-200/15 dark:from-rose-800/10 dark:to-red-800/10",
    delay: "8s",
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
