import { Code, Palette, LineChart } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description:
      "Sites vitrines, applications web et e-commerce développés avec les dernières technologies.",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description:
      "Interfaces modernes et intuitives créées pour optimiser l'expérience utilisateur.",
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    description:
      "Stratégies marketing personnalisées pour augmenter votre visibilité en ligne.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading heading-2 mb-4">Nos Services</h2>
          <p className="text-gray-600">
            Des solutions complètes pour votre présence numérique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading heading-3 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;