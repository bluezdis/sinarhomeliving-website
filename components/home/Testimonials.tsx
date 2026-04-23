import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pelanggan",
      message:
        "Produk berkualitas dan pengiriman cepat. Sangat puas dengan pelayanannya!",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      role: "Pelanggan",
      message:
        "Furniture yang saya beli tahan lama dan desainnya bagus. Recommend!",
      rating: 5,
    },
    {
      name: "Ahmad Wijaya",
      role: "Pelanggan",
      message:
        "Harga kompetitif dan banyak pilihan. Pasti belanja lagi di sini.",
      rating: 5,
    },
    {
      name: "Linda Kusuma",
      role: "Pelanggan",
      message:
        "Tim customer service yang responsif dan ramah. Sangat membantu!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <SectionTitle
          title="Testimoni Pelanggan"
          subtitle="Kepuasan pelanggan adalah prioritas utama kami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-warning text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground italic">
                  &quot;{testimonial.message}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
