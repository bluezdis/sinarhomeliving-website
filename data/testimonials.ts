export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ibu Sarah',
    role: 'Jakarta Pusat',
    content:
      'Sangat puas dengan kualitas sofa yang saya beli dari Sinar Home Living. Produknya bagus, harganya terjangkau, dan pelayanannya sangat ramah. Saya sudah merekomendasikan ke teman-teman saya.',
    rating: 5
  },
  {
    id: '2',
    name: 'Bapak Ahmad',
    role: 'Surabaya',
    content:
      'Proses pembelian sangat mudah melalui WhatsApp. Barangnya sampai dengan aman dan cepat. Customer service-nya responsif dan siap menjawab semua pertanyaan saya. Top!',
    rating: 5
  },
  {
    id: '3',
    name: 'Ibu Rina',
    role: 'Bandung',
    content:
      'Saya membeli kasur dan lemari dari sini. Kualitasnya benar-benar bagus dan tahan lama. Harganya juga lebih kompetitif dibanding tempat lain. Pasti beli lagi!',
    rating: 5
  },
  {
    id: '4',
    name: 'Bapak Rudi',
    role: 'Yogyakarta',
    content:
      'Cicilan tanpa bunga yang ditawarkan sangat membantu. Saya bisa membeli furniture impian tanpa memberatkan keuangan. Tim mereka juga sangat membantu dalam proses cicilan.',
    rating: 5
  },
  {
    id: '5',
    name: 'Ibu Dina',
    role: 'Medan',
    content:
      'Meja dan kursi kantor yang saya pesan sesuai dengan spesifikasi. Pengiriman ke Medan juga tidak ribet. Layanan purna jual mereka juga memuaskan.',
    rating: 4
  },
  {
    id: '6',
    name: 'Bapak Hendra',
    role: 'Makassar',
    content:
      'Garansi produk yang diberikan sangat menjamin. Ketika ada masalah kecil, customer service langsung siap membantu. Ini yang namanya pelayanan terbaik!',
    rating: 5
  }
]
