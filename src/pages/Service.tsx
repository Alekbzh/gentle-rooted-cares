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
    fullDescription: (
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-serif font-medium mb-4">À qui s'adresse la rééducation périnéale ?</h2>
          <p className="mb-4">
            La rééducation périnéale s'adresse principalement aux personnes ayant
            besoin de renforcer ou de restaurer la fonction musculaire du périnée.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Les femmes en post-partum</li>
            <li>Les femmes en période de ménopause</li>
            <li>Les personnes souffrant d'incontinence urinaire ou fécale</li>
            <li>Les hommes après une chirurgie de la prostate</li>
            <li>Les personnes avec des douleurs pelviennes ou périnéales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium mb-4">Pourquoi consulter un kinésithérapeute spécialisé :</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Incontinence urinaire</li>
            <li>Impériosités urinaires et fécales</li>
            <li>Incontinence anale</li>
            <li>Troubles de la statique pelvienne (descente d'organe et pesanteur pelvienne)</li>
            <li>Douleurs pelviennes (dyspareunies, vaginisme, vulvodynies, endométriose)</li>
            <li>Diastasis des grands droits</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium mb-4">En quoi consiste la rééducation ?</h2>
          <p className="mb-4">
            La rééducation périnéale par un kinésithérapeute vise à renforcer,
            assouplir ou rééduquer les muscles du plancher pelvien (le périnée),
            situés entre le pubis et le coccyx. Ces muscles jouent un rôle clé
            dans :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La continence urinaire et anale</li>
            <li>Le soutien des organes pelviens</li>
            <li>La fonction sexuelle</li>
          </ul>
          <p className="mt-4">
            Cette rééducation est particulièrement recommandée après un
            accouchement, mais elle peut aussi être utile dans d'autres contextes
            tout au long de la vie d'une femme, comme l'incontinence, les
            prolapsus ou les douleurs pelviennes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-medium mb-4">Déroulement de la rééducation périnéale :</h2>
          <p className="mb-4">
            La rééducation commence par un <strong>bilan</strong> afin d'évaluer
            la problématique et les objectifs de la patiente. Cela peut inclure :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>L'évaluation de symptômes</li>
            <li>L'utilisation de questionnaires</li>
            <li>Un examen clinique pour évaluer le périnée</li>
          </ul>
          <p className="mt-4">
            Selon le bilan, il peut être nécessaire d'utiliser une sonde
            intracavitaire permettant l'utilisation de techniques comme le
            biofeedback ou l'électrostimulation. Les autres techniques peuvent
            inclure :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Massage</li>
            <li>Étirements</li>
            <li>Techniques respiratoires</li>
            <li>Exercices spécifiques permettant le contrôle postural de la continence et du périnée</li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    id: "reeducation-post-partum",
    title: "Rééducation du post-partum",
    fullDescription: <p>En cours</p>,
  },
  {
    id: "soins-bien-etre",
    title: "Soins bien-être",
    fullDescription: <p>En cours</p>,
  },
  {
    id: "yoga",
    title: "Yoga",
    fullDescription: (
      <>
        <h3>Ma découverte du yoga et son intégration en kinésithérapie</h3>
        <p>
          J'ai découvert le yoga pendant le confinement, une période où j'ai
          appris l'importance de la discipline nécessaire pour progresser dans
          cette pratique. Cette découverte m'a conduit à suivre une formation
          de 200 heures au sein de l'école Amba Yoga. Ce cursus m'a permis
          d'approfondir ma compréhension du yoga et d'en embrasser une vision
          plus globale, à la fois philosophique et pratique.
        </p>
        <p>
          Le yoga ne se limite pas à une activité sportive classique. Il s'agit
          avant tout d'une pratique centrée sur l'écoute de soi, permettant de
          mieux connaître ses limites et d'apprendre à les respecter.
        </p>

        <h3>Yoga et kinésithérapie : une complémentarité évidente</h3>
        <p>
          La kinésithérapie se concentre sur la restauration des fonctions
          physiques, tandis que le yoga adopte une approche holistique
          combinant mouvements physiques, respiration, et méditation. Cette
          complémentarité est bénéfique pour :
        </p>
        <ul>
          <li>Améliorer la mobilité</li>
          <li>Renforcer la souplesse</li>
          <li>
            Gérer la douleur, notamment dans des pathologies chroniques comme
            l'endométriose
          </li>
        </ul>
        <p>
          Certaines postures de yoga s'intègrent parfaitement dans les
          protocoles de rééducation, offrant aux patients un outil pour se
          reconnecter à leur corps et accompagner leur guérison.
        </p>
      </>
    ),
  },
  {
    id: "reeducation-cancer-sein",
    title: "Rééducation après le cancer du sein",
    fullDescription: <p>En cours</p>,
  },
];

export default Service;