import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ServiceCard from "@/components/layanan/ServiceCard";

export default function LayananPage() {
  const services = [
    {
      icon: "🚚",
      title: "Pengiriman Gratis",
      description:
        "Pengiriman gratis untuk pembelian di atas Rp 500.000 ke seluruh Indonesia dengan asuransi penuh.",
      details: [
        "Gratis ke seluruh Indonesia",
        "Asuransi barang penuh",
        "Pengiriman dalam 3-7 hari kerja",
      ],
    },
    {
      icon: "💳",
      title: "Cicilan Tanpa Bunga",
      description:
        "Kami menyediakan berbagai pilihan cicilan untuk memudahkan Anda membeli furniture impian.",
      details: [
        "Cicilan 3, 6, atau 12 bulan",
        "Tanpa bunga & admin",
        "Proses persetujuan cepat",
      ],
    },
    {
      icon: "🛡️",
      title: "Garansi Produk",
      description:
        "Setiap produk yang Anda beli dilengkapi dengan garansi resmi dari manufacturer.",
      details: [
        "Garansi 1-3 tahun tergantung produk",
        "Klaim garansi mudah & cepat",
        "Customer service siap membantu",
      ],
    },
    {
      icon: "👨‍💼",
      title: "Konsultasi Gratis",
      description:
        "Tim ahli kami siap memberikan konsultasi gratis untuk membantu Anda memilih furniture yang tepat.",
      details: [
        "Konsultasi desain ruangan",
        "Rekomendasi produk sesuai budget",
        "Perawatan furniture",
      ],
    },
    {
      icon: "🔄",
      title: "Kebijakan Pengembalian",
      description:
        "Kami memberikan kebijakan pengembalian yang mudah dan fleksibel jika Anda tidak puas.",
      details: [
        "Pengembalian dalam 7 hari",
        "Uang kembali 100%",
        "Tanpa pertanyaan yang rumit",
      ],
    },
    {
      icon: "📱",
      title: "Customer Support 24/7",
      description:
        "Tim customer service kami siap membantu Anda kapan saja, setiap hari.",
      details: [
        "Respon cepat & ramah",
        "Tersedia via WhatsApp, Email, Phone",
        "Solusi masalah terbaik",
      ],
    },
  ];

  return (
    <>
      <div className="bg-secondary py-8 md:py-12">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Layanan Kami
          </h1>
          <p className="text-muted mt-2">
            Berbagai layanan unggulan untuk kenyamanan Anda
          </p>
        </Container>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Layanan Terbaik Kami"
            subtitle="Kami berkomitmen memberikan pengalaman belanja yang memuaskan dengan layanan premium"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* How to Order Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <SectionTitle
            title="Cara Berbelanja"
            subtitle="Proses belanja yang mudah dan aman"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Jelajahi Produk",
                description: "Lihat koleksi lengkap furniture dan pilih produk favorit Anda",
              },
              {
                step: 2,
                title: "Hubungi Kami",
                description: "Chat via WhatsApp atau hubungi customer service kami untuk konfirmasi",
              },
              {
                step: 3,
                title: "Pembayaran",
                description: "Lakukan pembayaran dengan berbagai metode yang tersedia",
              },
              {
                step: 4,
                title: "Pengiriman",
                description: "Produk akan dikemas rapi dan dikirim ke alamat Anda dengan aman",
              },
            ].map((item) => (
              <Card key={item.step}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Siap Mulai Berbelanja?
            </h2>
            <p className="text-lg text-white/90">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan
              konsultasi gratis dari tim ahli kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/produk"
                variant="secondary"
                size="lg"
              >
                Lihat Produk
              </Button>
              <Button
                href="/kontak"
                variant="outline"
                size="lg"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <WhatsAppButton fixed />
    </>
  );
}
