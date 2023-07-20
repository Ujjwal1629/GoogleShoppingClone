"use client";
import Image from "next/image";
import Link from "next/link";
import Avatar from "react-avatar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchButton from "./SearchButton";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (Low to high)",
  pd: "By Price (high to low)",
};

export default function Header() {
  const [pages, setPages] = useState("");
  const [sortBy, setSortBy] = useState("r");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();
  return (
    <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
      <Link href="/dist/">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </Link>
      <div className="w-full md:max-w-2xl">
        <form
          action={(formData) => {
            const searchTerm = formData.get("searchTerm");
            if (!formData.get("searchTerm")) return;
            const params = new URLSearchParams();
            if (pages) params.set("pages", pages.toString());
            if (minPrice) params.set("minPrice", minPrice.toString());
            if (maxPrice) params.set("maxPrice", maxPrice.toString());
            if (sortBy) params.set("sortBy", sortBy.toString());
            router.push(`/search/${searchTerm}?${params.toString()}`);
          }}
        >
          <div className="flex items-center gap-2 w-full px-4">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              <input
                type="text"
                placeholder="Search..."
                name="searchTerm"
                className="outline-none flex-1"
              />
            </div>
            <SearchButton />
          </div>
          <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto items-center">
            <SearchSelect
              onValueChange={(value) => setPages(value)}
              className="min-w-4"
              placeholder="# of pages"
            >
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  pages {(i + 1).toString()}
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <Select
              onValueChange={(value) => setSortBy(value)}
              className="min-w-4"
              placeholder="Sort by.."
            >
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={value}>
                  {value}
                </SelectItem>
              ))}
            </Select>

            <SearchSelect
              onValueChange={(value) => setMinPrice(value)}
              className="min-w-4"
              placeholder="Min Price.."
            >
              {["0", "500", "1000", "2000", "4000", "8000", "10000"].map(
                (_, i) => (
                  <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Minimum" : `INR ${_.toString()}`}
                  </SearchSelectItem>
                )
              )}
            </SearchSelect>
            <SearchSelect
              onValueChange={(value) => setMaxPrice(value)}
              className="min-w-4"
              placeholder="Max Price.."
            >
              {[
                "0",
                "500",
                "1000",
                "2000",
                "4000",
                "8000",
                "10000",
                "15000",
                "20000+",
              ].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Maximum" : `INR ${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
        </form>
      </div>
      {/* Avatar */}
      <div className="hidden lg:flex flex-1 justify-end">
        <Avatar name="Hunny Singh" round size="50" />
      </div>
      <div> </div>
    </header>
  );
}
