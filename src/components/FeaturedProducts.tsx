import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/contexts/CartContext";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    price: 399.99,
    image: "/placeholder.svg",
    category: "Audiófilo",
    brand: "Sony",
    description: "Audífonos inalámbricos con cancelación de ruido líder en la industria",
    features: ["Cancelación de ruido adaptativa", "30 horas de batería", "Audio de alta resolución"]
  },
  {
    id: 2,
    name: "Audio-Technica ATH-M50x",
    price: 149.99,
    image: "/placeholder.svg",
    category: "Estudio",
    brand: "Audio-Technica",
    description: "Audífonos de monitoreo profesional para estudio",
    features: ["Respuesta de frecuencia plana", "Construcción robusta", "Cable desmontable"]
  },
  {
    id: 3,
    name: "Sennheiser HD 660S2",
    price: 599.99,
    image: "/placeholder.svg",
    category: "Audiófilo",
    brand: "Sennheiser",
    description: "Audífonos abiertos de referencia para audiófilos",
    features: ["Drivers dinámicos de 38mm", "Diseño abierto", "Impedancia optimizada"]
  },
  {
    id: 4,
    name: "Beyerdynamic DT 770 PRO",
    price: 179.99,
    image: "/placeholder.svg",
    category: "Estudio",
    brand: "Beyerdynamic",
    description: "Audífonos cerrados profesionales para monitoreo",
    features: ["Aislamiento excepcional", "Comodidad prolongada", "Construcción alemana"]
  },
  {
    id: 5,
    name: "SteelSeries Arctis Pro",
    price: 249.99,
    image: "/placeholder.svg",
    category: "Gaming",
    brand: "SteelSeries",
    description: "Audífonos gaming con audio de alta fidelidad",
    features: ["DTS Headphone:X 2.0", "Micrófono retráctil", "RGB personalizable"]
  },
  {
    id: 6,
    name: "Pioneer HDJ-X10",
    price: 349.99,
    image: "/placeholder.svg",
    category: "DJ",
    brand: "Pioneer",
    description: "Audífonos profesionales para DJ",
    features: ["Construcción resistente", "Sonido potente", "Diseño giratorio"]
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Productos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los audífonos más populares y mejor valorados por nuestros clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};