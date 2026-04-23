import Container from "../common/Container";
import Button from "../common/Button";

export default function PromoSection() {
  return (
    <section className="py-16 md:py-24 bg-accent text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Promo Spesial Hari Ini
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Dapatkan diskon hingga 40% untuk pembelian produk pilihan kami!
          </p>
          <p className="text-base md:text-lg text-white/80">
            Penawaran terbatas, jangan lewatkan kesempatan ini untuk mendapatkan furniture impian Anda dengan harga yang lebih terjangkau.
          </p>
          <Button href="/produk" variant="secondary" size="lg">
            Belanja Sekarang & Hemat
          </Button>
        </div>
      </Container>
    </section>
  );
}
