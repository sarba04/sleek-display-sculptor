const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="heading heading-2">Notre Histoire</h2>
            <p className="text-gray-600">
              Depuis notre création, nous nous engageons à fournir des solutions
              numériques innovantes qui permettent à nos clients de se démarquer
              dans un monde digital en constante évolution.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
              "Notre mission est de transformer les idées ambitieuses en réalités
              numériques exceptionnelles."
            </blockquote>
            <div className="flex gap-4">
              <div>
                <h4 className="text-3xl font-bold text-primary">150+</h4>
                <p className="text-sm text-gray-600">Projets Réalisés</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">50+</h4>
                <p className="text-sm text-gray-600">Clients Satisfaits</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">5+</h4>
                <p className="text-sm text-gray-600">Années d'Expérience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-secondary rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;