import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <h4 className="font-extrabold text-4xl">Whoops...</h4>
      <p className="font-extralight animate-pulse">
        It looks like product not found!
      </p>
    </div>
  );
}
