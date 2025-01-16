import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading heading-1 mb-6 animate-fade-up">
            Transformez votre vision en{" "}
            <span className="text-primary">réalité digitale</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Nous créons des solutions numériques sur mesure pour faire grandir votre entreprise
            et impressionner vos clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a href="#contact" className="btn btn-primary px-8 py-3">
              Commencer un projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="btn btn-secondary px-8 py-3">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;