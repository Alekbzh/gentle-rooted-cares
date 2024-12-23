import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-8">
            Kinésithérapeute spécialisée en périnéologie
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Expertise et accompagnement personnalisé à Pluneret et Vannes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://www.doctolib.fr/masseur-kinesitherapeute/rennes/camille-mazzolini-rennes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre rendez-vous
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary hover:bg-primary/10"
            >
              <a href="#services">Découvrir mes services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;