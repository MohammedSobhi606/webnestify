import React from "react";
import { cta } from "../assets/content";

export default function CTA() {
  return (
    <section className="py-16">
      <div className=" grid gap-4 place-content-center w-full ">
        <h1 className="font-semibold text-2xl text-neutral-50  max-w-2xl text-center">
          {cta.title}
        </h1>
        {/* buttons */}
        <div className="purchase-btn flex items-center gap-2 flex-wrap justify-center">
          <button className="px-5 py-1.5 select-none rounded-lg bg-orange-600 text-neutral-50 text-lg hover:bg-orange-700 cursor-pointer  transition-all ease-in skew-x-12 hover:skew-0 ">
            Purchase Lifetime Access
          </button>
          <button className="sub-btn px-5 py-1.5 select-none rounded-lg bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 cursor-pointer  transition-colors ease-in ">
            Subscribs & Join
          </button>
        </div>
      </div>
    </section>
  );
}
