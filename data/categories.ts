export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  image: string
  subtitle: string
}

export const categories: Category[] = [
  {
    id: 'sofa',
    name: 'Sofa',
    slug: 'sofa-kursi',
    icon: '🛋️',
    description: 'Koleksi sofa dan kursi nyaman untuk ruang keluarga Anda',
    image: '/images/categories/sofa-category.jpg',
    subtitle: '20+ MODEL'
  },
  {
    id: 'kasur',
    name: 'Kasur & Springbed',
    slug: 'kasur-springbed',
    icon: '🛏️',
    description: 'Kasur dan springbed berkualitas untuk tidur nyenyak',
    image: '/images/categories/bed-category.jpg',
    subtitle: '15+ UKURAN'
  },
  {
    id: 'lemari',
    name: 'Lemari',
    slug: 'lemari',
    icon: '🗄️',
    description: 'Lemari penyimpanan plastik dan besi yang kuat dan tahan lama',
    image: '/images/categories/wardrobe-category.jpg',
    subtitle: 'PLASTIK, KAYU & BESI'
  },
  {
    id: 'meja',
    name: 'Meja Belajar & Rias',
    slug: 'meja',
    icon: '📝',
    description: 'Meja belajar dan rias dengan desain modern dan ergonomis',
    image: '/images/categories/table-category.jpg',
    subtitle: 'DESAIN MINIMALIS'
  },
  {
    id: 'rak',
    name: 'Rak Piring & Sayur',
    slug: 'rak',
    icon: '📦',
    description: 'Rak serbaguna untuk dapur, ruang makan, dan penyimpanan',
    image: '/images/categories/rack-category.jpg',
    subtitle: 'STAINLESS & PLASTIK'
  },
  {
    id: 'furniture-kantor',
    name: 'Furniture Kantor',
    slug: 'furniture-kantor',
    icon: '💼',
    description: 'Furniture kantor profesional untuk workspace yang produktif',
    image: '/images/categories/office-category.jpg',
    subtitle: 'KURSI & MEJA KERJA'
  }
]
