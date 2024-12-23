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
            {service.fullDescription}
          </div>
        </article>
      </main>
    </div>
  );
};

const services = [
  {
    id: "reeducation-perineale",
    title: "Rééducation périnéale",
    description: "Accompagnement personnalisé pour la rééducation du périnée, adapté à vos besoins spécifiques.",
    fullDescription: `La rééducation périnéale est essentielle pour maintenir la santé et le bon fonctionnement du plancher pelvien. Cette thérapie est particulièrement recommandée :

    • Après un accouchement
    • En cas d'incontinence urinaire
    • Pour prévenir ou traiter le prolapsus
    • Pour améliorer le confort et la qualité de vie

    Le traitement est personnalisé et adapté à chaque patient, utilisant des techniques manuelles et des exercices spécifiques pour renforcer les muscles du périnée.`,
  },
  {
    id: "preparation-accouchement",
    title: "Préparation à l'accouchement",
    description: "Séances individuelles pour vous préparer sereinement à l'accouchement.",
    fullDescription: `La préparation à l'accouchement est un accompagnement complet qui vous aide à aborder sereinement la naissance de votre enfant. Nos séances incluent :

    • Des exercices de respiration et de relaxation
    • Des positions favorables pour l'accouchement
    • Des informations sur le déroulement du travail
    • Des conseils pour la gestion de la douleur
    • Une préparation physique adaptée

    Chaque séance est personnalisée pour répondre à vos besoins et à vos interrogations.`,
  },
  {
    id: "suivi-post-partum",
    title: "Suivi post-partum",
    description: "Accompagnement et soins adaptés pour une récupération optimale après l'accouchement.",
    fullDescription: `Le suivi post-partum est crucial pour une bonne récupération après l'accouchement. Notre accompagnement comprend :

    • Une évaluation complète de votre état physique
    • La rééducation du périnée et des abdominaux
    • Des conseils pour la reprise d'activité
    • Un soutien pour l'allaitement si nécessaire
    • Des exercices adaptés à pratiquer à domicile

    Notre objectif est de vous aider à retrouver votre forme et votre confiance en douceur.`,
  },
  {
    id: "reeducation-abdominale",
    title: "Rééducation abdominale",
    description: "Programmes sur mesure pour retrouver tonicité et bien-être.",
    fullDescription: `La rééducation abdominale est essentielle pour retrouver une sangle abdominale fonctionnelle et esthétique. Notre approche inclut :

    • Une évaluation précise de votre sangle abdominale
    • Des exercices progressifs et adaptés
    • Des techniques de respiration spécifiques
    • Un travail sur la posture
    • Des conseils pour la vie quotidienne

    Nous adaptons le programme à vos objectifs et à votre condition physique.`,
  },
  {
    id: "consultation-perineale",
    title: "Consultation périnéale",
    description: "Bilan complet et conseils personnalisés pour votre santé périnéale.",
    fullDescription: `La consultation périnéale permet d'établir un bilan complet de votre santé périnéale. Elle comprend :

    • Un entretien approfondi sur vos symptômes et votre historique
    • Un examen clinique complet
    • Une évaluation de la tonicité musculaire
    • Des recommandations personnalisées
    • Un plan de traitement adapté

    Cette consultation est la première étape pour une prise en charge optimale.`,
  },
  {
    id: "soins-deconventionnes",
    title: "Soins déconventionnés",
    description: "Approche globale et personnalisée pour des soins spécifiques.",
    fullDescription: `Les soins déconventionnés permettent une prise en charge plus approfondie et personnalisée. Ces soins incluent :

    • Des séances plus longues
    • Une approche globale de votre santé
    • Des techniques manuelles spécifiques
    • Un suivi personnalisé
    • Une disponibilité accrue

    Ces soins sont particulièrement adaptés aux cas complexes nécessitant une attention particulière.`,
  },
];

export default Service;