import Image from "next/image";
import Container from "@/components/common/Container";
import Card from "@/components/common/Card";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function TentangKamiPage() {
  const features = [
    {
      title: "Pengiriman Purwasuka",
      description: "Kami antar langsung ke rumah Anda di area Purwakarta, Subang, Karawang dan sekitarnya.",
      icon: "🚚",
    },
    {
      title: "COD Tersedia",
      description: "Bayar di tempat setelah barang sampai. Aman dan transparan.",
      icon: "📋",
    },
    {
      title: "Kredit & Cicilan",
      description: "Pilihan cicilan fleksibel untuk memudahkan pembelian furniture impian Anda.",
      icon: "💳",
    },
    {
      title: "Rating 4.8 Bintang",
      description: "Dipercaya ratusan pelanggan dengan ulasan positif di Google Maps.",
      icon: "⭐",
    },
  ];

  return (
    <>
      {/* Main About Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden h-96 md:h-[500px] group">
                <Image
                  src="/images/about-store.jpg"
                  alt="Toko Sinar Home Living"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Location Badge */}
                <div className="absolute top-6 left-6 bg-primary rounded-full px-6 py-3 text-white shadow-lg">
                  <p className="text-xs font-semibold tracking-wide mb-1">LOKASI</p>
                  <p className="text-sm font-bold">Dekat Alun-alun Purwakarta</p>
                </div>
              </div>

              {/* Years in Business Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</p>
                <p className="text-foreground/80">Tahun melayani keluarga Purwakarta</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Header Label */}
              <div>
                <p className="text-primary font-semibold text-sm tracking-widest mb-4">
                  ♦ TENTANG KAMI
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Furniture berkualitas untuk <span className="italic">setiap keluarga</span> Purwakarta.
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Toko Sinar Living hadir di jantung Kota Purwakarta, menyediakan ragam furniture untuk rumah tangga dan kantor. Mulai dari sofa ruang tamu, kasur berkualitas, lemari plastik & besi, meja belajar, hingga rak dapur — semuanya ada di satu tempat.
                </p>
                <p>
                  Kami percaya furniture yang baik tidak harus mahal. Karena itu kami menawarkan <span className="font-semibold text-foreground">harga terjangkau</span>, opsi COD dan <span className="font-semibold text-foreground">kredit/cicilan</span>, serta pengiriman ke seluruh wilayah Purwasuka.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-foreground/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhatsAppButton fixed />
    </>
  );
}
