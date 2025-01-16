import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Laurent",
    role: "CEO, TechStart",
    content:
      "Une équipe exceptionnelle qui a su transformer notre vision en réalité. Le résultat dépasse nos attentes.",
  },
  {
    name: "Thomas Dubois",
    role: "Fondateur, CreativeHub",
    content:
      "Professionnalisme et créativité au rendez-vous. Je recommande vivement leurs services.",
  },
  {
    name: "Sophie Martin",
    role: "Directrice Marketing, InnovCorp",
    content:
      "Un partenaire de confiance pour tous nos projets digitaux. Expertise et réactivité exemplaires.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading heading-2 mb-4">Témoignages</h2>
          <p className="text-gray-600">Ce que nos clients disent de nous</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;