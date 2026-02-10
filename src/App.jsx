import About from "./components/About";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Header from "./components/Header";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-400 HPadding maxW ">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Header />
      <Benefits />
      <About />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
