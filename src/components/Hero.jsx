import React from "react";
import { hero } from "../assets/content";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
export default function Hero() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(SplitText);
  const {} = useGSAP(() => {
    function IntroScene() {
      const introTl = gsap.timeline();
      introTl.from(".hero", {
        clipPath: "inset(30% 20%  30% 20% )",
        duration: 1,
      });
    }
    function HeroScene() {
      const heroTl = gsap.timeline();
      const heroTitle = SplitText.create(".heroTitle", {
        type: "chars",
        smartWrap: true,
        mask: "chars",
      });

      heroTl
        .from(".badge", {
          x: 100,
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power4.in",
        })
        .from(heroTitle.chars, {
          x: 100,

          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power4",
        })
        .from(".heroParagraph", {
          y: 100,
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power1",
        })
        .from(
          ".purchase-btn",
          {
            y: 100,
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2",
          },
          "<"
        )
        .from(
          ".sub-btn",
          {
            y: 100,
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2",
          },
          "<"
        );
    }

    let masterScene = gsap
      .timeline()
      .add(IntroScene())
      .add(HeroScene(), "+=0.5"); // overlap slightly
  }, {});
  return (
    <div className="hero flex flex-col items-center justify-center  gap-8 py-16 border rounded-xl border-neutral-600 h-full relative overflow-hidden bg-neutral-900 backdrop-blur-2xl">
      {/* rippon */}
      <div className="rippon absolute transform -rotate-45 bg-orange-600 text-center text-white font-semibold py-1 -left-12 top-12 w-54 hidden sm:block">
        New
      </div>
      <div className="flex flex-col items-center max-w-4xl text-center gap-8 px-4 ">
        {/* badge */}
        <div className="badge flex items-center gap-2 ">
          <Badge />
          <p>{hero.badge.text}</p>
        </div>
        {/* hero Title */}
        <h1 className="heroTitle text-4xl md:text-6xl text-neutral-50 font-semibold ">
          {hero.title}
        </h1>
        <p className="heroParagraph text-base max-w-2xl">{hero.description}</p>
      </div>
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
  );
}

function Badge() {
  return (
    <div className=" flex items-center gap-x-1 px-2 py-1 border border-neutral-800 rounded-2xl">
      <span className="size-2 rounded-full bg-orange-600 animate-pulse" />
      <p className="text-neutral-200 font-semibold text-sm">{hero.badge.dot}</p>
    </div>
  );
}
