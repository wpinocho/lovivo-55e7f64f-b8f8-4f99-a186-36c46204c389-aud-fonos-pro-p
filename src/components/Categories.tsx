import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Estudio",
    description: "Para grabación y mezcla profesional",
    icon: "🎚️",
    count: 25
  },
  {
    id: 2,
    name: "DJ",
    description: "Perfectos para presentaciones en vivo",
    icon: "🎧",
    count: 18
  },
  {
    id: 3,
    name: "Gaming",
    description: "Experiencia inmersiva para gamers",
    icon: "🎮",
    count: 32
  },
  {
    id: 4,
    name: "Audiófilo",
    description: "Calidad de sonido excepcional",
    icon: "🎵",
    count: 15
  }
];

export const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Categorías</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra los audífonos perfectos para tu necesidad específica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {category.count} productos
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};