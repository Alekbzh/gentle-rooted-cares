import Header from "@/components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Service = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 pt-24">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          <h1 className="text-2xl font-serif">Service non trouvé</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-8">
            {service.title}
          </h1>
          <div className="prose prose-lg max-w-none">
          </div>
        </article>
      </main>
    </div>
  );
};

const services = [
  {
    id: "reeducation-abdomino-perineale",
    title: "Rééducation abdomino-périnéale",
    description: "Accompagnement personnalisé pour la rééducation du périnée, adapté à vos besoins spécifiques.",
    fullDescription:`En cours`,  
  },  
  {
    id: "reeducation-post-partum",
    title: "Rééducation du post-partum",
    description: "Accompagnement et soins adaptés pour une récupération optimale après l'accouchement.",
    fullDescription: `En cours`,
  },
  {
    id: "soins-bien-etre",
    title: "Soins bien-être",
    description: "Des soins personnalisés pour votre bien-être physique et mental, dans une approche globale et bienveillante.",
    fullDescription: `En cours`,
  },
  {
    id: "yoga",
    title: "Yoga",
    description: "Séances de yoga adaptées à vos besoins, alliant postures, respiration et relaxation pour un équilibre corps-esprit.",
    fullDescription: `En cours`,
  },
  {
    id: "reeducation-cancer-sein",
    title: "Rééducation après le cancer du sein",
    description: "Accompagnement spécialisé pour la rééducation post-cancer du sein, avec une approche douce et personnalisée.",
    fullDescription: `En cours`,
  },
];

export default Service;
