export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  specs?: { key: string; value: string }[];
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export const categories = [
  "Sofa & Kursi",
  "Kasur & Springbed",
  "Lemari",
  "Meja",
  "Rak",
  "Furniture Kantor",
  "Aksesori Rumah Tangga",
];

export const products: Product[] = [
  {
    id: "sofa-1",
    name: "Sofa L Modern Minimalis",
    category: "Sofa & Kursi",
    price: 3500000,
    originalPrice: 4200000,
    image: "/images/products/sofa-1.jpg",
    description:
      "Sofa L yang elegan dengan desain minimalis modern. Bahan fabric berkualitas tinggi yang nyaman dan tahan lama.",
    specs: [
      { key: "Ukuran", value: "200cm x 150cm" },
      { key: "Bahan", value: "Fabric Premium" },
      { key: "Warna", value: "Abu-abu, Beige, Navy" },
    ],
    inStock: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: "kasur-1",
    name: "Kasur Busa Orthopedic 200x200",
    category: "Kasur & Springbed",
    price: 2800000,
    image: "/images/products/bed-1.jpg",
    description:
      "Kasur busa orthopedic dengan teknologi terkini untuk dukungan tulang belakang yang optimal.",
    specs: [
      { key: "Ukuran", value: "200cm x 200cm" },
      { key: "Ketebalan", value: "25cm" },
      { key: "Jenis", value: "Busa Orthopedic" },
    ],
    inStock: true,
    rating: 4.7,
    reviews: 18,
  },
  {
    id: "lemari-1",
    name: "Lemari Plastik 4 Pintu Besar",
    category: "Lemari",
    price: 1200000,
    image: "/images/products/wardrobe-1.jpg",
    description:
      "Lemari plastik berkualitas dengan 4 pintu, kokoh dan tahan lama. Cocok untuk penyimpanan berbagai barang.",
    specs: [
      { key: "Ukuran", value: "120cm x 60cm x 170cm" },
      { key: "Bahan", value: "Plastik Premium" },
      { key: "Kapasitas", value: "4 Pintu" },
    ],
    inStock: true,
    rating: 4.5,
    reviews: 15,
  },
  {
    id: "meja-1",
    name: "Meja Belajar Kayu Solid",
    category: "Meja",
    price: 850000,
    image: "/images/products/table-1.jpg",
    description:
      "Meja belajar dari kayu solid dengan desain ergonomis. Cocok untuk ruang belajar anak atau kantor kecil.",
    specs: [
      { key: "Ukuran", value: "120cm x 60cm x 75cm" },
      { key: "Bahan", value: "Kayu Solid" },
      { key: "Warna", value: "Alami, Dark Brown" },
    ],
    inStock: true,
    rating: 4.6,
    reviews: 12,
  },
  {
    id: "rak-1",
    name: "Rak Sayuran Besi 5 Tingkat",
    category: "Rak",
    price: 450000,
    image: "/images/products/rack-1.jpg",
    description:
      "Rak sayuran dengan struktur besi yang kuat dan kokoh. Ideal untuk menyimpan sayuran atau barang lainnya.",
    specs: [
      { key: "Ukuran", value: "60cm x 45cm x 180cm" },
      { key: "Material", value: "Besi Chrome" },
      { key: "Kapasitas", value: "5 Tingkat" },
    ],
    inStock: true,
    rating: 4.4,
    reviews: 8,
  },
  {
    id: "kursi-1",
    name: "Kursi Gaming Ergonomis",
    category: "Sofa & Kursi",
    price: 1500000,
    originalPrice: 1800000,
    image: "/images/products/office-chair-1.jpg",
    description:
      "Kursi gaming dengan desain ergonomis yang nyaman untuk penggunaan jangka panjang.",
    specs: [
      { key: "Bahan", value: "Synthetic Leather" },
      { key: "Fitur", value: "Adjustable Height, Reclining" },
      { key: "Warna", value: "Hitam, Merah, Biru" },
    ],
    inStock: true,
    rating: 4.7,
    reviews: 31,
  },
  {
    id: "kasur-2",
    name: "Springbed Premium 160x200",
    category: "Kasur & Springbed",
    price: 4500000,
    image: "/images/products/bed-2.jpg",
    description:
      "Springbed premium dengan teknologi coil terbaik untuk kenyamanan maksimal sepanjang malam.",
    specs: [
      { key: "Ukuran", value: "160cm x 200cm" },
      { key: "Tipe", value: "Springbed" },
      { key: "Bahan Top", value: "Memory Foam Premium" },
    ],
    inStock: true,
    rating: 4.9,
    reviews: 42,
  },
  {
    id: "lemari-2",
    name: "Lemari Besi 2 Pintu",
    category: "Lemari",
    price: 1800000,
    image: "/images/products/wardrobe-2.jpg",
    description:
      "Lemari besi berkualitas dengan 2 pintu. Kokoh, tahan lama, dan anti karat.",
    specs: [
      { key: "Ukuran", value: "90cm x 45cm x 185cm" },
      { key: "Bahan", value: "Besi Anti Karat" },
      { key: "Pintu", value: "2 Pintu dengan Kunci" },
    ],
    inStock: true,
    rating: 4.6,
    reviews: 19,
  },
  {
    id: "meja-2",
    name: "Meja Rias Minimalis",
    category: "Meja",
    price: 920000,
    image: "/images/products/table-2.jpg",
    description:
      "Meja rias dengan desain minimalis modern dan cermin yang luas untuk kenyamanan maksimal.",
    specs: [
      { key: "Ukuran", value: "80cm x 40cm x 75cm" },
      { key: "Bahan", value: "Kayu + Kaca" },
      { key: "Fitur", value: "Cermin, 3 Laci" },
    ],
    inStock: true,
    rating: 4.5,
    reviews: 14,
  },
  {
    id: "rak-2",
    name: "Rak Piring Stainless 3 Tingkat",
    category: "Rak",
    price: 380000,
    image: "/images/products/rack-1.jpg",
    description:
      "Rak piring dari stainless steel berkualitas. Hemat tempat dan mudah dibersihkan.",
    specs: [
      { key: "Ukuran", value: "50cm x 30cm x 70cm" },
      { key: "Material", value: "Stainless Steel" },
      { key: "Kapasitas", value: "3 Tingkat" },
    ],
    inStock: true,
    rating: 4.7,
    reviews: 22,
  },
  {
    id: "sofa-2",
    name: "Sofa Bed Multifungsi",
    category: "Sofa & Kursi",
    price: 2200000,
    image: "/images/products/sofa-2.jpg",
    description:
      "Sofa bed yang dapat dibuka menjadi tempat tidur. Sempurna untuk apartemen atau ruang tamu yang terbatas.",
    specs: [
      { key: "Ukuran", value: "180cm (dibuka 190cm x 120cm)" },
      { key: "Bahan", value: "Fabric + Metal Frame" },
      { key: "Fitur", value: "Convertible Bed" },
    ],
    inStock: true,
    rating: 4.6,
    reviews: 26,
  },
  {
    id: "furniture-kantor-1",
    name: "Meja Kerja Kantor Modern",
    category: "Furniture Kantor",
    price: 1100000,
    image: "/images/products/table-1.jpg",
    description:
      "Meja kerja dengan desain modern dan minimalis. Dilengkapi dengan laci untuk penyimpanan.",
    specs: [
      { key: "Ukuran", value: "140cm x 70cm x 75cm" },
      { key: "Bahan", value: "MDF + Metal Frame" },
      { key: "Fitur", value: "2 Laci, Cable Management" },
    ],
    inStock: true,
    rating: 4.5,
    reviews: 11,
  },
];
