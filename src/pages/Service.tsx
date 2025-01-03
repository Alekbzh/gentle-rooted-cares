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
    id: "reeducation-abdomino-perineale",
    title: "Rééducation abdomino-périnéale",
    fullDescription:`A qui s’adresse la rééducation périnéale ?

La rééducation périnéale s’adresse principalement aux personnes ayant besoin de renforcer ou de restaurer la fonction musculaire du périnée.
Elle concerne particulièrement :
- Les femmes  en post-partum 
- Les femmes en période de ménopause 
- Les personnes souffrant d’incontinence urinaire ou fécale 
- Les hommes après une chirurgie de la prostate 
- Les personnes avec des douleurs pelviennes ou périnéales

Pourquoi consulter un kinésithérapeute spécialisé :

- Incontinence urinaire 
- Imperiosités urinaires et fécales
- Incontinence anale
- Troubles de la statique pelvienne (descente d’organe et pesanteur pelvienne)
- Douleurs pelviennes ( dyspareunies, vaginisme, vulvodynies, endométriose)
- Diastasis des grands droits

En quoi consiste la rééducation ?

La rééducation périnéale par un kinésithérapeute vise à renforcer, assouplir ou rééduquer les muscles du plancher pelvien (le périnée), situés entre le pubis et le coccyx. Ces muscles jouent un rôle clé dans la continence urinaire et anale, le soutien des organes pelviens et la fonction sexuelle. Cette rééducation est particulièrement recommandée après un accouchement, mais elle peut aussi être utile dans d’autres contextes tout au long de la vie d’une femme, comme l’incontinence, les prolapsus ou les douleurs pelviennes.

Déroulement de la rééducation périnéale :

La rééducation commence par un bilan afin d’évaluer la problématique et les objectifs de la patiente.
Cela peut inclure l’évaluation de symptômes, l’utilisation de questionnaires et un examen clinique pour évaluer le périnée.
Selon le bilan il peut être nécessaire d’utiliser une sonde intracavitaire permettant l’utilisation de techniques comme le biofeedback ou l’electrostimulation. 
Les autres techniques peuvent être du massage, des étirements, l’utilisation de techniques respiratoires ou d’exercices spécifiques permettant le contrôle postural de la continence et du périnée.`,  
  },  
  {
    id: "reeducation-post-partum",
    title: "Rééducation du post-partum",
    fullDescription: `En cours`,
  },
  {
    id: "soins-bien-etre",
    title: "Soins bien-être",
    fullDescription: `En cours`,
  },
  {
    id: "yoga",
    title: "Yoga",
    fullDescription: `Ma découverte du yoga et son intégration en kinésithérapie

J’ai découvert le yoga pendant le confinement, une période où j’ai appris l’importance de la discipline nécessaire pour progresser dans cette pratique. Cette découverte m’a conduit à suivre une formation de 200 heures au sein de l’école Amba Yoga. Ce cursus m’a permis d’approfondir ma compréhension du yoga et d’en embrasser une vision plus globale, à la fois philosophique et pratique.

Le yoga ne se limite pas à une activité sportive classique, encore moins à un sport de compétition. Il s’agit avant tout d’une pratique où l’écoute de soi est essentielle. Les limites de notre corps varient selon les jours, nos cycles, ou nos états d’esprit. L’objectif n’est pas de se comparer aux autres, mais de mieux se connaître, d’accepter ses capacités, et d’apprendre à respecter ses limites.

Contrairement à une simple exécution de postures (asanas), le yoga englobe aussi des dimensions respiratoires et mentales. Il s’agit d’une pratique qui nourrit à la fois le corps et l’esprit, favorisant ainsi un équilibre global.

Yoga et kinésithérapie : une complémentarité évidente

La kinésithérapie se concentre sur la restauration des fonctions physiques, tandis que le yoga adopte une approche holistique combinant mouvements physiques (asanas), respiration, et méditation. Cette complémentarité est particulièrement bénéfique pour améliorer la mobilité, renforcer la souplesse, et mieux gérer la douleur, notamment dans des pathologies chroniques comme l’endométriose.

Certaines postures de yoga s’intègrent parfaitement dans les protocoles de rééducation, offrant aux patients un outil supplémentaire pour se reconnecter à leur corps et accompagner leur guérison de manière plus globale.`,
  },
  {
    id: "reeducation-cancer-sein",
    title: "Rééducation après le cancer du sein",
    fullDescription: `En cours`,
  },
];

export default Service;
