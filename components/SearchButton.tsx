"use-client";

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SearchButton() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-blue-500 hover:bg-blue-700 font-bold px-4 py-4 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed">
      {pending && "Searching..."}
      {!pending && <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
    </button>
  );
}
