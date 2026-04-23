import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ContactForm from "@/components/kontak/ContactForm";
import ContactInfo from "@/components/kontak/ContactInfo";

export default function KontakPage() {
  return (
    <>
      <div className="bg-secondary py-8 md:py-12">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Hubungi Kami
          </h1>
          <p className="text-muted mt-2">
            Ada pertanyaan? Kami siap membantu Anda!
          </p>
        </Container>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactInfo />
            <div>
              <Card className="bg-background h-96 flex items-center justify-center rounded-lg">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🗺️</div>
                  <p className="text-muted font-medium">
                    Google Maps akan ditampilkan di sini
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Mengapa Memilih Kami?
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Produk berkualitas dari supplier terpercaya</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Harga kompetitif dan transparan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Customer service ramah dan responsif</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Pengiriman aman dan tepat waktu</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Berbagai pilihan cicilan tanpa bunga</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Butuh Bantuan Cepat?
            </h2>
            <p className="text-lg text-white/90">
              Chat langsung dengan tim kami melalui WhatsApp untuk respon cepat dan solusi terbaik.
            </p>
            <Button
              href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20Sinar%20Home%20Living"
              variant="secondary"
              size="lg"
            >
              Chat WhatsApp Sekarang
            </Button>
          </div>
        </Container>
      </section>

      <WhatsAppButton fixed />
    </>
  );
}
