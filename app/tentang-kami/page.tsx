import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import CompanyStory from "@/components/tentang-kami/CompanyStory";
import MissionVision from "@/components/tentang-kami/MissionVision";

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
      <CompanyStory />

      {/* Mission & Vision */}
      <MissionVision />

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
