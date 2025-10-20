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

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-12 text-center">
            Mes soins
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

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-8">
              À propos
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Camille Mazzolini, masseur-kinésithérapeute diplômée d'État, spécialisée en pelvi-périnéologie.<br /> Ce domaine m'a passionnée dès le début de ma carrière, et il est rapidement devenu le cœur de mon orientation professionnelle.<br />
              Afin d'approfondir mes compétences, j'ai suivi plusieurs formations spécialisées en pelvi-périnéologie, tout en élargissant ma prise en charge à une approche plus globale.<br /> J'intègre notamment le complexe lombo-abdomino-pelvien et m'appuie sur les bienfaits du yoga, tant sur le plan physique, à travers les postures (asanas), que psychique, pour une gestion améliorée des douleurs lombo-pelviennes.<br />
              J'ai à cœur d'accompagner les femmes dans leur rééducation périnéale, leur bien-être global et leur retour au sport, en leur proposant un suivi personnalisé et bienveillant.
            </p>
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
                  <p className="text-gray-700">Medicentre - Centre du Ténénio</p>
                  <p className="text-gray-700">10 rue Dr Joseph Audic, 56000 Vannes</p>
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
                  <p className="text-gray-700">camille.mazzolini@gmail.com</p>
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
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.3!2d-2.759433!3d47.658628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48101e7f8e8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sMedicentre%20-%20Centre%20du%20T%C3%A9n%C3%A9nio%2C%2010%20Rue%20Docteur%20Joseph%20Audic%2C%2056000%20Vannes!5e0!3m2!1sfr!2sfr!4v1710799027252!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet de kinésithérapie - Medicentre Vannes"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


const services = [
  {
    id: "reeducation-abdomino-perineale",
    title: "Rééducation abdomino-périnéale",
    description: "Renforcement du périnée et de la sangle abdominale",
  },
  {
    id: "grossesse et post-partum",
    title: "Grossesse et post-partum",
    description: "Accompagnement pendant et après la grossesse",
  },
  {
    id: "soins-bien-etre",
    title: "Soins bien-être",
    description: "Massages et soins relaxants personnalisés",
  },
  {
    id: "yoga",
    title: "Yoga",
    description: "Séances de yoga adaptées à vos besoins",
  },
  {
    id: "reeducation-cancer-sein",
    title: "Rééducation après le cancer du sein",
    description: "Accompagnement post-cancer pour retrouver mobilité et confort",
  },
  {
    id: "reeducation masculine",
    title: "Rééducation masculine",
    description: "Soins périnéaux adaptés aux hommes",
  },
  {
    id: "douleurs pelviennes",
    title: "Douleurs pelviennes",
    description: "Traitement des douleurs du bassin et du périnée",
  }, 
];

export default Index;
