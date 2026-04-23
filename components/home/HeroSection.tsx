import Container from "../common/Container";
import Button from "../common/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Furniture Berkualitas untuk Rumah Impian Anda
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Sinar Home Living menyediakan furniture dan perlengkapan rumah tangga berkualitas tinggi dengan harga terjangkau. Percayakan kebutuhan interior rumah Anda kepada kami.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/produk" variant="primary" size="lg">
                Belanja Sekarang
              </Button>
              <Button href="/tentang-kami" variant="secondary" size="lg">
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <p className="text-sm text-foreground/70">Produk Tersedia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <p className="text-sm text-foreground/70">Pelanggan Puas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-foreground/70">Terpercaya</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative h-96 md:h-[500px]">
            <Image
              src="/images/hero-furniture.jpg"
              alt="Furniture Berkualitas"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
