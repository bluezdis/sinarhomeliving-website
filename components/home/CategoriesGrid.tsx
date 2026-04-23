import Link from "next/link";
import { categories } from "@/data/categories";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

export default function CategoriesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <SectionTitle
          title="Jelajahi Kategori"
          subtitle="Temukan berbagai kategori furniture dan perlengkapan rumah tangga"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/produk?kategori=${category.slug}`}>
              <Card
                hover
                className="text-center py-8 cursor-pointer h-full flex items-center justify-center"
              >
                <div className="space-y-3">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base">
                    {category.name}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
