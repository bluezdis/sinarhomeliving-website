# Sinar Home Living - Website Frontend

Website e-commerce furniture dan perlengkapan rumah tangga yang responsif dan modern, dibangun dengan Next.js 15, React 19, TypeScript, dan Tailwind CSS.

## 🎯 Fitur Utama

### Pages
- **Beranda (/)** - Landing page dengan hero section, produk unggulan, kategori, testimonial
- **Produk (/produk)** - Listing produk dengan filter kategori, harga range, dan search
- **Detail Produk (/produk/[id])** - Halaman detail produk dengan spesifikasi lengkap
- **Tentang Kami (/tentang-kami)** - Cerita perusahaan, misi, visi, dan nilai-nilai
- **Layanan (/layanan)** - Layanan unggulan, cara berbelanja, dan promo
- **Kontak (/kontak)** - Formulir kontak, informasi kontak, jam operasional

### Fitur Produk
- **Filter Produk** - Filter berdasarkan kategori, harga, dan pencarian
- **Responsive Grid** - Layout yang responsif dari mobile hingga desktop
- **Kategori Produk** - 7 kategori utama: Sofa, Kasur, Lemari, Meja, Rak, Furniture Kantor, Aksesori
- **Search & Filter** - Pencarian produk dan filter harga dengan range slider
- **Product Cards** - Menampilkan gambar, harga, kategori, stock status
- **WhatsApp CTA** - Floating button WhatsApp untuk customer inquiry

### Komponen Reusable
- **Button** - Dengan varian (primary, secondary, outline) dan ukuran berbeda
- **Card** - Komponen card untuk produk, layanan, testimonial
- **Container** - Max-width wrapper untuk konsistensi layout
- **SectionTitle** - Judul section yang konsisten
- **Breadcrumb** - Navigasi breadcrumb untuk product detail pages
- **WhatsAppButton** - Floating button WhatsApp integration

## 🏗️ Struktur Folder

```
src/
├── app/                              # Next.js app directory
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   ├── produk/
│   │   ├── page.tsx                # Products listing
│   │   └── [id]/page.tsx           # Product detail
│   ├── tentang-kami/
│   │   └── page.tsx                # About page
│   ├── layanan/
│   │   └── page.tsx                # Services page
│   ├── kontak/
│   │   └── page.tsx                # Contact page
│   ├── error.tsx                    # Error boundary
│   ├── not-found.tsx               # 404 page
│   └── globals.css                  # Global styles
├── components/
│   ├── common/                      # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── WhatsAppButton.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/                        # Home page components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CategoriesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   └── PromoSection.tsx
│   ├── produk/                      # Product components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductFilters.tsx
│   ├── tentang-kami/
│   │   ├── CompanyStory.tsx
│   │   └── MissionVision.tsx
│   ├── layanan/
│   │   └── ServiceCard.tsx
│   └── kontak/
│       ├── ContactForm.tsx
│       └── ContactInfo.tsx
└── data/
    ├── products.ts                  # Static product data
    ├── categories.ts               # Category data
    └── testimonials.ts             # Testimonial data
```

## 🎨 Design System

### Color Palette
- **Primary**: Warm brown/tan (#9B6D4F)
- **Accent**: Orange-brown (#CD7F32)
- **Secondary**: Light gray backgrounds
- **Neutrals**: White, grays, dark gray text

### Typography
- **Headings**: Bold, tracking-tight
- **Body**: System fonts, leading-relaxed
- **Line Height**: 1.4-1.6 untuk body text

### Layout
- **Mobile-first** responsive design
- **Flexbox** untuk mayoritas layouts
- **Max-width container** untuk konsistensi
- **Grid** untuk product dan testimonial sections

## 🔧 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4+
- **UI Library**: Custom components (reusable)
- **Icons**: Unicode/Emoji
- **Form**: Native HTML form + React state
- **Data Management**: Static data files + React state (siap untuk API integration)

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "next": "^15.5.15"
  },
  "devDependencies": {
    "typescript": "^5.9.3",
    "tailwindcss": "^3.4.19",
    "autoprefixer": "^10.5.0",
    "postcss": "^8.5.10"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ atau pnpm 8+

### Installation

```bash
# Clone repository
git clone <repository-url>
cd sinar-home-living

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
pnpm start
```

Dev server akan berjalan di `http://localhost:3000`

## 🔄 Routing

- `/` - Home page
- `/produk` - Products listing
- `/produk/[id]` - Product detail
- `/tentang-kami` - About us
- `/layanan` - Services
- `/kontak` - Contact

Query params untuk filter produk:
- `?kategori=sofa-kursi` - Filter by category
- `?search=sofa` - Search products

## 📝 Features & Future Development

### Current Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Product listing dengan filter & search
- ✅ Product detail pages
- ✅ Contact form (frontend only, ready for backend)
- ✅ Category filtering
- ✅ Price range filtering
- ✅ Testimonial section
- ✅ WhatsApp integration (CTA buttons)
- ✅ Services showcase
- ✅ About page

### Ready for Backend Integration
- Contact form submission endpoint
- Product data API (currently static)
- User authentication (untuk admin/customer)
- Shopping cart functionality
- Order management
- Payment integration

## 📱 Responsive Breakpoints

- **Mobile**: 0-640px
- **Tablet**: 641-1024px
- **Desktop**: 1025px+

## 🔐 Security Considerations

- TypeScript untuk type safety
- Input validation siap di form
- No sensitive data in client
- Ready untuk environment variables setup

## 📄 Static Data Structure

### Products
```typescript
{
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  description: string
  specs?: { key: string; value: string }[]
  inStock: boolean
  rating?: number
}
```

### Categories
```typescript
{
  id: string
  name: string
  slug: string
  icon: string
  description: string
}
```

### Testimonials
```typescript
{
  id: string
  name: string
  role: string
  content: string
  rating: number
}
```

## 🤝 Contributing

1. Create feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open Pull Request

## 📝 Environment Variables

Siap untuk ditambahkan:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_PHONE_NUMBER=
NEXT_PUBLIC_EMAIL=
```

## 📞 Contact Information

- **WhatsApp**: +62 812 3456 7890
- **Email**: info@sinarhomeliving.com
- **Address**: Jl. Raya Furniture No. 123, Jakarta Selatan

## 📄 License

Proprietary - Sinar Home Living

---

**Built with ❤️ using Next.js, React, TypeScript, dan Tailwind CSS**
