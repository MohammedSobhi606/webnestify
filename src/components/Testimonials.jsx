import { testimonial } from "../assets/content";
import simonImg from "../assets/simon.webp";

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2  rounded-xl  bg-neutral-900 overflow-hidden">
        <img
          src={simonImg}
          alt="test"
          className="aspect-video object-cover rounded-xl border-4 border-neutral-700 hover:scale-110 transition-transform ease-in-out"
        />
        <div className="grid gap-2 p-8 ">
          <p>{testimonial.quote}</p>
          <div className="space-y-0">
            <p>{testimonial.author}</p>
            <p className="text-orange-700">{testimonial.rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
