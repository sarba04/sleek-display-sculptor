import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Users } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
            Festival de Foi et Lumière 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up">
            Un moment de foi, de partage et d'émotions
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 animate-fade-up"
          >
            S'inscrire maintenant
          </Button>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Card key={unit} className="text-center p-4 border-none shadow-lg bg-secondary">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">{unit}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Foi et Spiritualité</h3>
                <p className="text-gray-600">Vivez des moments de recueillement et de connexion spirituelle profonde</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Communauté</h3>
                <p className="text-gray-600">Rejoignez une communauté bienveillante et partageuse</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent>
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Programme Riche</h3>
                <p className="text-gray-600">Participez à des activités variées et enrichissantes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos du Festival</h2>
          <p className="text-lg text-gray-700 mb-8">
            Le Festival de Foi et Lumière est un rassemblement spirituel unique qui vous invite 
            à vivre des moments d'exception. Pendant trois jours, venez partager votre foi, 
            rencontrer une communauté chaleureuse et vivre une expérience spirituelle inoubliable.
          </p>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
            En savoir plus
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;