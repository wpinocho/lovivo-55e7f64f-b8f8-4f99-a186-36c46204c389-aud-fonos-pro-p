import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Audífonos Profesionales de Alta Calidad
          </h1>
          <p className="text-xl mb-8 text-slate-200">
            Descubre nuestra colección de audífonos premium para profesionales del audio, 
            músicos y audiófilos que buscan la mejor experiencia sonora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Ver Catálogo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Ofertas Especiales
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-transparent to-slate-900/50 hidden lg:block">
        <div className="h-full flex items-center justify-center">
          <div className="text-9xl opacity-10">🎧</div>
        </div>
      </div>
    </section>
  );
};