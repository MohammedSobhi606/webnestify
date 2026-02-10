import React from "react";
import { horizontalJourney } from "../assets/content";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Benefits() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const panels = gsap.utils.toArray(".panel");

    let mm = gsap.matchMedia();
    mm.add("(min-width:1000px)", () => {
      const HS = gsap.to(panels, {
        scrollTrigger: {
          trigger: ".horizontalJourney",
          scrub: 1,
          pin: true,
          anticipatePin: 2,
          // pinSpacing: false,
          snap: 0.75 / panels.length,
          start: "top top",
          end: `bottom `,
        },
        xPercent: panels.length * -100,
        ease: "none",
      });
      panels.forEach((p, inx) => {
        const elements = p.querySelectorAll("h1,p");
        if (inx <= 1) {
          return;
        }
        gsap.from(elements, {
          y: 50,
          opacity: 0,
          stagger: ".2",
          scrollTrigger: {
            containerAnimation: HS,
            trigger: p,
            start: "end center",
          },
        });
      });
    });
  });
  return (
    <section className="horizontalJourney relative min-h-screen  mt-12 ">
      <h1 className="text-4xl text-neutral-50 font-semibold text-center">
        {horizontalJourney.title}
      </h1>

      <div className="w-full flex   items-center flex-row md:flex-nowrap gap-16  py-32 overflow-hidden max-md:overflow-x-scroll">
        {horizontalJourney.sections.map((item) => (
          <div
            className="panel card   shrink-0  flex w-80 border border-neutral-100  p-4 flex-col gap-10 bg-neutral-950 "
            key={item.description}
          >
            <h1 className="text-orange-500 font-black text-5xl tracking-wider ">
              {item.step}
            </h1>
            <p className="font-bold text-xl text-neutral-50 tracking-wide">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
