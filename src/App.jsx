import About from "./components/About";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-400 HPadding maxW ">
      <Header />
      <Benefits />
      <About />
      <Features />
    </main>
  );
}
