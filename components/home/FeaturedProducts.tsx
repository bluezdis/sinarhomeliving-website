import { products } from "@/data/products";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../produk/ProductCard";
import Button from "../common/Button";

export default function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <SectionTitle
          title="Produk Unggulan Kami"
          subtitle="Koleksi pilihan furniture dan perlengkapan rumah tangga berkualitas dengan harga terbaik"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/produk" variant="primary" size="lg">
            Lihat Semua Produk
          </Button>
        </div>
      </Container>
    </section>
  );
}
