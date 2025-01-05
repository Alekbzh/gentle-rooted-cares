import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-8">
              Camille Mazzolini <br />
              Kinésithérapeute
            </h1>
            <p className="text-xl text-teal-600 mb-12">
              Rééducation en pelvi-périnéologie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
                <a href="#services">Découvrir mes soins</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-[75%] max-w-md">
            <img
              src="/lovable-uploads/d65d5cee-a2fb-4b59-bf2f-78bc4a51ba59.png"
              alt="Illustration bassin"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;