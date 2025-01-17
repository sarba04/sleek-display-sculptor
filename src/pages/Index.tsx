import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Users, Sun, BookOpen, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Date du festival (exemple: 1er décembre 2024)
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

  return (
    <div className="min-h-screen">
      {/* Hero Section avec overlay amélioré */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
            Festival de Foi et Lumière 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up opacity-90">
            Un voyage spirituel unique de partage, de foi et d'émotions
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 animate-fade-up shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Rejoignez l'aventure spirituelle
          </Button>
        </div>
      </section>

      {/* Countdown Section avec design amélioré */}
      <section className="py-16 bg-gradient-to-b from-spiritual to-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Card key={unit} className="text-center p-4 border-none shadow-lg bg-white/80 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">{unit}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section avec nouvelles icônes et design */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">L'Expérience du Festival</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-spiritual/30">
              <CardContent>
                <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Amour & Partage</h3>
                <p className="text-gray-600">Vivez des moments de connexion profonde et de partage authentique</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-spiritual/30">
              <CardContent>
                <Sun className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Illumination</h3>
                <p className="text-gray-600">Découvrez une nouvelle perspective spirituelle qui illuminera votre chemin</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-spiritual/30">
              <CardContent>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Sagesse</h3>
                <p className="text-gray-600">Approfondissez votre compréhension à travers des enseignements inspirants</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section avec design amélioré */}
      <section className="py-20 bg-secondary/50">
        <div className="container max-w-4xl text-center">
          <Star className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Notre Vision</h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Le Festival de Foi et Lumière est bien plus qu'un simple événement - c'est une expérience 
            transformatrice qui rassemble les âmes en quête de sens. Pendant trois jours magiques, 
            nous créons un espace sacré où la spiritualité, l'art et la communauté se rencontrent 
            pour créer des moments inoubliables.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">500+</h4>
              <p className="text-gray-600">Participants</p>
            </div>
            <div className="text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">3 Jours</h4>
              <p className="text-gray-600">D'Immersion</p>
            </div>
            <div className="text-center">
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">1 Communauté</h4>
              <p className="text-gray-600">Unie</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;