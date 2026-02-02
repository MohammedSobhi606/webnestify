import React from "react";
import { about } from "../assets/content";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const bios = gsap.utils.toArray(".bio");
    gsap.from(bios, {
      y: 60,
      opacity: 0,
      scrollTrigger: { trigger: ".bio", scrub: 1 },
      ease: "power2.inOut",
      stagger: 0.2,
      duration: 3,
    });
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl mt-4 bg-neutral-900">
      <img
        src={about.imageSrc}
        alt="simon"
        className=" object-cover rounded-xl border-4 border-neutral-600 size-full"
      />
      {/* content */}
      <div className="flex p-8 flex-col gap-6 ">
        <h2 className="text-neutral-50 font-semibold">{about.greeting}</h2>
        <p>{about.introduction}</p>
        {about.bio.map((item) => (
          <p className="bio">{item}</p>
        ))}
        <h2 className="text-neutral-50 font-serif">{about.signature}</h2>
      </div>
    </div>
  );
}
