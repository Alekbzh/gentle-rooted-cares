import Header from "@/components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
#import ReactMarkdown from "react-markdown";

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
    fullDescription:`<strong>A qui s’adresse la rééducation périnéale ?</strong>

La rééducation périnéale s’adresse principalement aux personnes ayant besoin de renforcer ou de restaurer la fonction musculaire du périnée.
Elle concerne particulièrement :
- Les femmes  en post-partum 
- Les femmes en période de ménopause 
- Les personnes souffrant d’incontinence urinaire ou fécale 
- Les hommes après une chirurgie de la prostate 
- Les personnes avec des douleurs pelviennes ou périnéales

<strong>Pourquoi consulter un kinésithérapeute spécialisé :</strong>

- Incontinence urinaire 
- Imperiosités urinaires et fécales
- Incontinence anale
- Troubles de la statique pelvienne (descente d’organe et pesanteur pelvienne)
- Douleurs pelviennes (dyspareunies, vaginisme, vulvodynies, endométriose)
- Diastasis des grands droits

<strong>En quoi consiste la rééducation ?</strong>

La rééducation périnéale par un kinésithérapeute vise à renforcer, assouplir ou rééduquer les muscles du plancher pelvien (le périnée), situés entre le pubis et le coccyx. Ces muscles jouent un rôle clé dans la continence urinaire et anale, le soutien des organes pelviens et la fonction sexuelle. Cette rééducation est particulièrement recommandée après un accouchement, mais elle peut aussi être utile dans d’autres contextes tout au long de la vie d’une femme, comme l’incontinence, les prolapsus ou les douleurs pelviennes.

<strong>Déroulement de la rééducation périnéale :</strong>

La rééducation commence par un bilan afin d’évaluer la problématique et les objectifs de la patiente.
Cela peut inclure l’évaluation de symptômes, l’utilisation de questionnaires et un examen clinique pour évaluer le périnée.
Selon le bilan il peut être nécessaire d’utiliser une sonde intracavitaire permettant l’utilisation de techniques comme le biofeedback ou l’electrostimulation. 
Les autres techniques peuvent être du massage, des étirements, l’utilisation de techniques respiratoires ou d’exercices spécifiques permettant le contrôle postural de la continence et du périnée`,
},  
  {
    id: "reeducation-post-partum",
    title: "Rééducation du post-partum",
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
