import { testimonials } from "@/data/testimonials";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <SectionTitle
          title="Testimoni Pelanggan"
          subtitle="Kepuasan pelanggan adalah prioritas utama kami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id}>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-warning text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground italic">
                  &quot;{testimonial.content}&quot;
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
