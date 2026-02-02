import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className="flex flex-col space-y-8  py-6">
      <Navbar />
      <Hero />
    </div>
  );
}
