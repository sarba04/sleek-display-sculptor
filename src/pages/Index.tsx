import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Users, Sun, BookOpen, Star, ArrowRight, MapPin, Music, Coffee } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const festivalDate = new Date('2024-12-01T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = festivalDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = () => {
    toast({
      title: "Inscription initiée",
      description: "Vous allez être redirigé vers le formulaire d'inscription",
    });
  };

  const features = [
    {
      icon: Heart,
      title: "Communion Spirituelle",
      description: "Partagez des moments de prière et de méditation en communauté"
    },
    {
      icon: Music,
      title: "Louanges & Chants",
      description: "Vivez des moments de louange avec des chants inspirants"
    },
    {
      icon: Coffee,
      title: "Partage & Convivialité",
      description: "Échangez lors de moments conviviaux entre participants"
    }
  ];

  const stats = [
    { value: "500+", label: "Participants", icon: Users },
    { value: "20+", label: "Activités", icon: Calendar },
    { value: "3", label: "Jours", icon: Sun },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section amélioré */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')",
            filter: "brightness(0.5)"
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
          }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Festival de Foi et Lumière
            <span className="block text-primary-light">2024</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Embarquez pour un voyage spirituel unique où la foi, le partage et les émotions 
            se rencontrent dans une harmonie parfaite
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              onClick={handleRegisterClick}
              className="bg-primary hover:bg-primary-dark text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Rejoignez l'aventure spirituelle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Countdown Section avec design amélioré */}
      <section className="py-20 bg-gradient-to-b from-spiritual to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5" />
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Festival Commence Dans</h2>
            <p className="text-gray-600">Préparez-vous pour cette expérience unique</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="text-5xl font-bold text-primary mb-2">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{unit}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section avec animations */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Une Expérience Unique</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les moments précieux qui vous attendent lors de notre festival
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-spiritual/30">
                  <CardContent>
                    <feature.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section avec animations */}
      <section className="py-20 bg-secondary/50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Star className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Notre Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le Festival de Foi et Lumière est une expérience transformatrice qui rassemble 
              les âmes en quête de sens. Pendant trois jours magiques, nous créons un espace 
              sacré où la spiritualité, l'art et la communauté se rencontrent pour créer des 
              moments inoubliables.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">{stat.value}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-spiritual relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Prêt à Vivre cette Expérience ?
            </h2>
            <p className="text-lg mb-12 text-gray-700">
              Rejoignez-nous pour trois jours de partage, de foi et d'émotions intenses.
              Une expérience qui marquera votre chemin spirituel.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                onClick={handleRegisterClick}
                className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                S'inscrire au Festival
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;