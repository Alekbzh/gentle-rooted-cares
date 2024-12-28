import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                onClick={() => navigate(`/services/${service.id}`)}
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
                  <h3 className="font-medium text-gray-900">Adresses</h3>
                  <p className="text-gray-700">2 Rue Loïc Caradec, 56400 Pluneret</p>
                  <p className="text-gray-700">10 Rue Docteur Joseph Audic, 56000 Vannes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium text-gray-900">Téléphone</h3>
                  <p className="text-gray-700">07 80 98 74 43</p>
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
                      href="https://www.doctolib.fr/masseur-kinesitherapeute/rennes/camille-mazzolini-rennes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Réserver sur Doctolib
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21501.89786661053!2d-2.7500000000000004!3d47.6652167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48101c1b8a6585e5%3A0x3b9b1914f96c1b46!2s2%20Rue%20Lo%C3%AFc%20Caradec%2C%2056400%20Pluneret!5e0!3m2!1sfr!2sfr!4v1710799027252!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    id: "reeducation-perineale",
    title: "Rééducation périnéale",
    description: "Accompagnement personnalisé pour la rééducation du périnée, adapté à vos besoins spécifiques.",
  },
  {
    id: "preparation-accouchement",
    title: "Préparation à l'accouchement",
    description: "Séances individuelles pour vous préparer sereinement à l'accouchement.",
  },
  {
    id: "suivi-post-partum",
    title: "Suivi post-partum",
    description: "Accompagnement et soins adaptés pour une récupération optimale après l'accouchement.",
  },
  {
    id: "reeducation-abdominale",
    title: "Rééducation abdominale",
    description: "Programmes sur mesure pour retrouver tonicité et bien-être.",
  },
  {
    id: "consultation-perineale",
    title: "Consultation périnéale",
    description: "Bilan complet et conseils personnalisés pour votre santé périnéale.",
  },
  {
    id: "soins-deconventionnes",
    title: "Soins déconventionnés",
    description: "Approche globale et personnalisée pour des soins spécifiques.",
  },
];

export default Index;