"use client";

import { products } from "@/data/products";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Produk", href: "/produk" },
    { label: product.category, href: `/produk?kategori=${product.category}` },
    { label: product.name },
  ];

  return (
    <>
      <section className="py-8 md:py-12 bg-secondary">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center mb-4">
                <span className="text-muted text-lg">Gambar Produk</span>
              </div>
              {product.images && product.images.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square bg-secondary rounded-lg flex items-center justify-center"
                    >
                      <span className="text-xs text-muted">Foto {idx + 1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  {!product.inStock && (
                    <span className="bg-error text-white px-3 py-1 rounded-full text-sm font-medium">
                      Stok Habis
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1">
                      {[...Array(Math.round(product.rating))].map((_, i) => (
                        <span key={i} className="text-warning text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-muted">
                      {product.rating} ({product.reviews} ulasan)
                    </span>
                  </div>
                )}
              </div>

              {/* Price */}
              <Card className="bg-secondary border-0">
                <div className="space-y-2">
                  <p className="text-muted text-sm">Harga</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-primary">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted line-through">
                        Rp {product.originalPrice.toLocaleString("id-ID")}
                      </span>
                    )}
                    {discountPercent > 0 && (
                      <span className="text-lg font-bold text-error">
                        Hemat {discountPercent}%
                      </span>
                    )}
                  </div>
                </div>
              </Card>

              {/* Description */}
              <div>
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  Deskripsi
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    Spesifikasi
                  </h3>
                  <Card className="border-0 bg-secondary">
                    <div className="space-y-3">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span className="text-muted font-medium">
                            {spec.key}
                          </span>
                          <span className="text-foreground font-semibold">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {/* Stock Status */}
              <Card className="border-0 bg-secondary p-4">
                <p className="text-foreground font-medium">
                  Status:{" "}
                  <span
                    className={
                      product.inStock ? "text-success font-bold" : "text-error"
                    }
                  >
                    {product.inStock ? "Stok Tersedia" : "Stok Habis"}
                  </span>
                </p>
              </Card>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={`https://wa.me/628123456789?text=Saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}%0AHarga:%20Rp%20${product.price.toLocaleString("id-ID")}%0AReferensi:%20${product.id}`}
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={!product.inStock}
                >
                  Chat WhatsApp
                </Button>
                <Button
                  href="/kontak"
                  variant="secondary"
                  size="lg"
                  fullWidth
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-12 md:py-16 bg-secondary">
        <Container>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Produk Serupa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products
              .filter(
                (p) =>
                  p.category === product.category &&
                  p.id !== product.id
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <a
                  key={relatedProduct.id}
                  href={`/produk/${relatedProduct.id}`}
                  className="group"
                >
                  <Card hover className="h-full">
                    <div className="bg-background rounded-md aspect-square mb-4 flex items-center justify-center">
                      <span className="text-muted">Gambar</span>
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xl font-bold text-primary">
                      Rp {relatedProduct.price.toLocaleString("id-ID")}
                    </p>
                  </Card>
                </a>
              ))}
          </div>
        </Container>
      </section>

      <WhatsAppButton fixed />
    </>
  );
}
