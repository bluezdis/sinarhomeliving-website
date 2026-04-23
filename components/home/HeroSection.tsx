import Container from "../common/Container";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-light py-20 md:py-32 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Selamat Datang di Sinar Home Living
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Toko online terpercaya untuk furniture berkualitas dan perlengkapan rumah tangga yang Anda butuhkan.
          </p>
          <p className="text-lg text-white/80">
            Harga terjangkau, kualitas terbaik, layanan memuaskan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button href="/produk" variant="secondary" size="lg">
              Belanja Sekarang
            </Button>
            <Button href="/tentang-kami" variant="outline" size="lg">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
