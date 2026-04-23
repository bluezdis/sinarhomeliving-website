export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  description: string
}

export const categories: Category[] = [
  {
    id: 'sofa',
    name: 'Sofa & Kursi',
    slug: 'sofa-kursi',
    icon: '🛋️',
    description: 'Koleksi sofa dan kursi nyaman untuk ruang keluarga Anda'
  },
  {
    id: 'kasur',
    name: 'Kasur & Springbed',
    slug: 'kasur-springbed',
    icon: '🛏️',
    description: 'Kasur dan springbed berkualitas untuk tidur nyenyak'
  },
  {
    id: 'lemari',
    name: 'Lemari (Plastik & Besi)',
    slug: 'lemari',
    icon: '🗄️',
    description: 'Lemari penyimpanan plastik dan besi yang kuat dan tahan lama'
  },
  {
    id: 'meja',
    name: 'Meja (Belajar & Rias)',
    slug: 'meja',
    icon: '📝',
    description: 'Meja belajar dan rias dengan desain modern dan ergonomis'
  },
  {
    id: 'rak',
    name: 'Rak (Piring, Sayur, dll)',
    slug: 'rak',
    icon: '📦',
    description: 'Rak serbaguna untuk dapur, ruang makan, dan penyimpanan'
  },
  {
    id: 'furniture-kantor',
    name: 'Furniture Kantor',
    slug: 'furniture-kantor',
    icon: '💼',
    description: 'Furniture kantor profesional untuk workspace yang produktif'
  },
  {
    id: 'aksesori',
    name: 'Aksesori Rumah Tangga',
    slug: 'aksesori',
    icon: '✨',
    description: 'Aksesori rumah tangga dan dekorasi pendukung'
  }
]
