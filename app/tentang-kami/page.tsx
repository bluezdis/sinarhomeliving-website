import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function TentangKamiPage() {
  const values = [
    {
      title: "Kualitas Terbaik",
      description:
        "Kami hanya menjual produk berkualitas tinggi dari supplier terpercaya.",
      icon: "⭐",
    },
    {
      title: "Harga Terjangkau",
      description:
        "Kami menawarkan harga kompetitif tanpa mengorbankan kualitas produk.",
      icon: "💰",
    },
    {
      title: "Layanan Prima",
      description:
        "Tim customer service kami siap membantu Anda dengan respons cepat dan ramah.",
      icon: "🤝",
    },
    {
      title: "Pengiriman Cepat",
      description:
        "Kami bekerja sama dengan kurir terpercaya untuk pengiriman tepat waktu.",
      icon: "🚚",
    },
  ];

  return (
    <>
      <div className="bg-secondary py-8 md:py-12">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Tentang Kami
          </h1>
          <p className="text-muted mt-2">
            Mengenal lebih jauh tentang Sinar Home Living
          </p>
        </Container>
      </div>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <SectionTitle
                title="Kisah Kami"
                subtitle=""
                centered={false}
              />
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Sinar Home Living didirikan dengan visi sederhana namun kuat:
                menyediakan furniture dan perlengkapan rumah tangga berkualitas
                dengan harga yang terjangkau untuk seluruh masyarakat Indonesia.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Sejak awal, kami berkomitmen untuk memberikan pengalaman berbelanja
                yang memuaskan dengan produk-produk pilihan, layanan pelanggan yang
                responsif, dan proses pengiriman yang aman dan cepat.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Kini, dengan dukungan pelanggan setia kami, Sinar Home Living terus
                berkembang dan menjadi pilihan utama untuk kebutuhan furniture rumah
                tangga di Indonesia.
              </p>
              <Button href="/kontak" variant="primary">
                Hubungi Kami Sekarang
              </Button>
            </div>
            <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-6xl">🏠</div>
                <p className="text-muted">Gambar Tim Kami</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <SectionTitle
            title="Misi & Visi Kami"
            subtitle="Komitmen kami untuk memberikan yang terbaik"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold text-primary mb-4">Misi</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    Menyediakan furniture berkualitas tinggi dengan harga terjangkau
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Memberikan layanan pelanggan yang luar biasa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Membangun kepercayaan jangka panjang dengan pelanggan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Terus berinovasi dalam produk dan layanan</span>
                </li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold text-primary mb-4">Visi</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    Menjadi toko online furniture pilihan utama di Indonesia
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Memperluas jangkauan ke seluruh nusantara</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Menyediakan produk yang ramah lingkungan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Menciptakan dampak positif bagi masyarakat</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Nilai-Nilai Kami"
            subtitle="Prinsip yang kami pegang teguh dalam setiap langkah"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover>
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/80 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <WhatsAppButton fixed />
    </>
  );
}
