import Container from "../common/Container";
import Button from "../common/Button";

export default function PromoSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-accent to-accent-light text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Promo Spesial Hari Ini
            </h2>
            <div className="h-1 w-24 bg-white mx-auto rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-white/95">
            Dapatkan diskon hingga 40% untuk pembelian produk pilihan kami!
          </p>
          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Penawaran terbatas, jangan lewatkan kesempatan ini untuk mendapatkan furniture impian Anda dengan harga yang lebih terjangkau. Gratis ongkos kirim untuk pembelian di atas Rp 500.000.
          </p>
          <Button href="/produk" variant="secondary" size="lg" className="mt-6">
            Belanja Sekarang & Hemat
          </Button>
        </div>
      </Container>
    </section>
  );
}
