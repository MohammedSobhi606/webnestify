import React from "react";
import { features } from "../assets/content";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Features() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const features = gsap.utils.toArray(".feature");
    gsap.from(features, {
      y: 60,
      opacity: 0,
      scrollTrigger: ".feature",
      ease: "power4.in",
      stagger: 0.1,
    });
  });
  return (
    <div className="py-16 grid gap-8">
      <div
        className="
        flex flex-col gap-4 "
      >
        <h1 className="text-2xl font-semibold text-neutral-50">
          {features.title}
        </h1>
        <button className="px-5 py-1.5 select-none rounded-lg bg-neutral-50 text-neutral-950  hover:bg-orange-500 cursor-pointer font-semibold transition-colors ease-in self-baseline">
          {features.button}
        </button>
      </div>
      <div className="featureContainer grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.items.map((item) => (
          <SingleFeature data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
function SingleFeature({ data }) {
  return (
    <div className="feature flex items-center gap-2 group">
      <div className="p-4 bg-neutral-900 rounded-xl border-2 border-neutral-800 group-hover:bg-neutral-950 transition-colors ease-in">
        <data.icon className=" size-6 group-hover:text-orange-600 transition-all ease-in group-hover:scale-110 shrink-0 " />
      </div>
      <div>{data.title}</div>
    </div>
  );
}
