import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import Card from "../common/Card";
import Button from "../common/Button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card hover className="flex flex-col h-full overflow-hidden">
      {/* Image Container */}
      <div className="relative mb-4 bg-secondary rounded-lg aspect-square overflow-hidden group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 right-3 bg-error text-white px-3 py-1 rounded-full text-xs font-bold">
            -{discountPercent}%
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Stok Habis</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Name */}
        <h3 className="font-bold text-foreground line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/produk/${product.id}`}>{product.name}</Link>
        </h3>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-warning text-sm">
                  {"★"}
                </span>
              ))}
            </div>
            <span className="text-xs text-muted">
              {product.rating} ({product.reviews} ulasan)
            </span>
          </div>
        )}

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted line-through">
                Rp {product.originalPrice.toLocaleString("id-ID")}
              </span>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button
            href={`/produk/${product.id}`}
            variant="outline"
            size="sm"
            fullWidth
          >
            Lihat Detail
          </Button>
          <Button
            href={`https://wa.me/628123456789?text=Saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`}
            variant="primary"
            size="sm"
            fullWidth
          >
            Pesan
          </Button>
        </div>
      </div>
    </Card>
  );
}
