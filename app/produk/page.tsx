"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ProductGrid from "@/components/produk/ProductGrid";
import ProductFilters from "@/components/produk/ProductFilters";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([
    0, 100000000,
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        !selectedCategory || product.category === selectedCategory;
      const priceMatch =
        product.price >= selectedPriceRange[0] &&
        product.price <= selectedPriceRange[1];
      const searchMatch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && priceMatch && searchMatch;
    });
  }, [selectedCategory, selectedPriceRange, searchQuery]);

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedPriceRange([0, 100000000]);
    setSearchQuery("");
  };

  return (
    <>
      <div className="bg-secondary py-8 md:py-12">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Semua Produk
          </h1>
          <p className="text-muted mt-2">
            Jelajahi koleksi lengkap furniture dan perlengkapan rumah tangga kami
          </p>
        </Container>
      </div>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  selectedPriceRange={selectedPriceRange}
                  searchQuery={searchQuery}
                  onCategoryChange={setSelectedCategory}
                  onPriceChange={setSelectedPriceRange}
                  onSearchChange={setSearchQuery}
                  onReset={handleReset}
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-foreground font-medium">
                  Menampilkan {filteredProducts.length} dari {products.length} produk
                </p>
              </div>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </Container>
      </section>

      <WhatsAppButton fixed />
    </>
  );
}
