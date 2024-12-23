import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-8">
              À propos
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Spécialisée en périnéologie, je vous accompagne dans votre parcours de soin avec une approche personnalisée et bienveillante. Mon expertise s'étend de la rééducation périnéale à la préparation à l'accouchement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-12 text-center">
            Mes services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-12 text-center">
            Contact
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium text-gray-900">Adresse</h3>
                  <p className="text-gray-700">Pluneret et Vannes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium text-gray-900">Téléphone</h3>
                  <p className="text-gray-700">+33 6 XX XX XX XX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-700">contact@camillemazzolini.fr</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium text-gray-900">Rendez-vous</h3>
                  <Button
                    asChild
                    className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href="https://www.doctolib.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Réserver sur Doctolib
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-[400px]">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
                Carte Google Maps
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Rééducation périnéale",
    description: "Accompagnement personnalisé pour la rééducation du périnée, adapté à vos besoins spécifiques.",
  },
  {
    title: "Préparation à l'accouchement",
    description: "Séances individuelles pour vous préparer sereinement à l'accouchement.",
  },
  {
    title: "Suivi post-partum",
    description: "Accompagnement et soins adaptés pour une récupération optimale après l'accouchement.",
  },
  {
    title: "Rééducation abdominale",
    description: "Programmes sur mesure pour retrouver tonicité et bien-être.",
  },
  {
    title: "Consultation périnéale",
    description: "Bilan complet et conseils personnalisés pour votre santé périnéale.",
  },
  {
    title: "Soins déconventionnés",
    description: "Approche globale et personnalisée pour des soins spécifiques.",
  },
];

export default Index;