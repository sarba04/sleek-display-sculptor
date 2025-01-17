import Navbar from "@/components/layout/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-spiritual/20">
      <Navbar />
      <div className="pt-24 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Contactez-nous</h1>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions concernant le Festival Spirituel. N'hésitez pas à nous contacter.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-primary mb-6">Informations de contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">contact@festivalspirituel.fr</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">123 Avenue de la Spiritualité, 75001 Paris</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-primary mb-6">Horaires d'ouverture</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                  <p className="text-gray-600">Samedi: 10h00 - 16h00</p>
                  <p className="text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  {...register("subject", { required: true })}
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874587931!5w=600!5h=450"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;