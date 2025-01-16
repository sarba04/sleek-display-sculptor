const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading heading-2 mb-4">Contactez-nous</h2>
            <p className="text-gray-600 mb-8">
              Parlons de votre projet et voyons comment nous pouvons vous aider à
              le réaliser.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Notre adresse</h4>
                <p className="text-gray-600">123 Rue du Commerce, 75001 Paris</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">contact@company.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Téléphone</h4>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-8 py-3 w-full">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;