import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    id: 1,
    title: "Cérémonie d'ouverture",
    date: "2024-06-01",
    time: "09:00",
    location: "Grande salle",
    description: "Ouverture officielle du festival avec prières et chants traditionnels.",
  },
  {
    id: 2,
    title: "Conférence spirituelle",
    date: "2024-06-01",
    time: "14:00",
    location: "Salle de conférence A",
    description: "Discussion sur les valeurs spirituelles dans le monde moderne.",
  },
  {
    id: 3,
    title: "Méditation collective",
    date: "2024-06-02",
    time: "08:00",
    location: "Jardin zen",
    description: "Session de méditation guidée pour tous les participants.",
  },
  {
    id: 4,
    title: "Cérémonie de clôture",
    date: "2024-06-02",
    time: "18:00",
    location: "Grande salle",
    description: "Célébration finale et remerciements.",
  },
];

const Program = () => {
  const [selectedDate, setSelectedDate] = useState("2024-06-01");
  const { toast } = useToast();

  const filteredEvents = events.filter((event) => event.date === selectedDate);

  const addToCalendar = (event: typeof events[0]) => {
    // Here you would typically generate an .ics file or integrate with calendar APIs
    toast({
      title: "Événement ajouté !",
      description: "L'événement a été ajouté à votre calendrier.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="section bg-accent">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading heading-1 mb-4">Programme du Festival</h1>
              <p className="text-gray-600">
                Découvrez tous les événements prévus pendant le festival
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={selectedDate === "2024-06-01" ? "default" : "outline"}
                onClick={() => setSelectedDate("2024-06-01")}
              >
                Jour 1
              </Button>
              <Button
                variant={selectedDate === "2024-06-02" ? "default" : "outline"}
                onClick={() => setSelectedDate("2024-06-02")}
              >
                Jour 2
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-5 w-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => addToCalendar(event)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Ajouter au calendrier
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Program;