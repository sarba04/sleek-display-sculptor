import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Calendar, Heart, Users, MapPin } from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    {
      icon: Users,
      value: "1000+",
      label: "Participants depuis la création"
    },
    {
      icon: Calendar,
      value: "5",
      label: "Éditions réussies"
    },
    {
      icon: Heart,
      value: "50+",
      label: "Bénévoles engagés"
    },
    {
      icon: MapPin,
      value: "10+",
      label: "Régions représentées"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <div className="pt-24 container">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Notre Histoire</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Le Festival de Foi et Lumière est né d'une vision simple mais puissante : 
            créer un espace où la spiritualité, l'art et la communauté se rencontrent 
            pour célébrer notre foi commune.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">Notre Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Notre mission est de créer un environnement où chaque participant peut 
              vivre une expérience spirituelle transformatrice. Nous croyons en la 
              puissance du rassemblement et du partage pour renforcer notre foi et 
              notre communauté.
            </p>
            <div className="pl-4 border-l-4 border-primary">
              <p className="italic text-gray-700">
                "Chaque édition du festival est une nouvelle opportunité de toucher 
                les cœurs et de renforcer les liens qui nous unissent dans la foi."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-r from-primary/10 to-purple-100 rounded-lg shadow-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Foi</h3>
              <p className="text-gray-600">
                La foi est au cœur de notre festival, guidant chaque aspect de notre programmation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Partage</h3>
              <p className="text-gray-600">
                Nous créons des espaces de partage authentique et d'échange spirituel.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Unité</h3>
              <p className="text-gray-600">
                Nous célébrons l'unité dans la diversité de notre communauté.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;