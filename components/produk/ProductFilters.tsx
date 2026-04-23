"use client";

import { categories } from "@/data/products";
import Button from "../common/Button";

interface ProductFiltersProps {
  selectedCategory: string;
  selectedPriceRange: [number, number];
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onSearchChange: (query: string) => void;
  onReset: () => void;
}

export default function ProductFilters({
  selectedCategory,
  selectedPriceRange,
  searchQuery,
  onCategoryChange,
  onPriceChange,
  onSearchChange,
  onReset,
}: ProductFiltersProps) {
  const priceRanges = [
    { label: "Semua Harga", value: [0, 100000000] as [number, number] },
    { label: "Rp 0 - Rp 1 Juta", value: [0, 1000000] as [number, number] },
    { label: "Rp 1 - Rp 2 Juta", value: [1000000, 2000000] as [number, number] },
    { label: "Rp 2 - Rp 3 Juta", value: [2000000, 3000000] as [number, number] },
    { label: "Di atas Rp 3 Juta", value: [3000000, 100000000] as [number, number] },
  ];

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block font-semibold text-foreground mb-3">
          Cari Produk
        </label>
        <input
          type="text"
          placeholder="Ketik nama produk..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Kategori</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ""}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-4 h-4 text-primary cursor-pointer"
            />
            <span className="text-sm font-medium text-foreground">
              Semua Kategori
            </span>
          </label>
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 text-primary cursor-pointer"
              />
              <span className="text-sm font-medium text-foreground">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Rentang Harga</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="price"
                checked={
                  selectedPriceRange[0] === range.value[0] &&
                  selectedPriceRange[1] === range.value[1]
                }
                onChange={() => onPriceChange(range.value)}
                className="w-4 h-4 text-primary cursor-pointer"
              />
              <span className="text-sm font-medium text-foreground">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        onClick={onReset}
        variant="secondary"
        fullWidth
        className="text-primary font-bold"
      >
        Reset Filter
      </Button>
    </div>
  );
}
