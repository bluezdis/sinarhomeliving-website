import Container from "../common/Container";
import Button from "../common/Button";

export default function PromoSection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content - Main promo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-light px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Promo Terbatas
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Promo Spesial Hari Ini
            </h2>

            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Dapatkan diskon hingga <span className="text-accent font-bold">40%</span> untuk 
              pembelian produk pilihan kami! Gratis ongkos kirim untuk pembelian di atas Rp 500.000.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                href="/produk" 
                variant="outline" 
                size="lg" 
                className="bg-white text-primary hover:bg-accent hover:text-white hover:border-accent border-white"
              >
                Belanja Sekarang
              </Button>
              <Button 
                href="/kontak" 
                variant="ghost" 
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Right content - Promo highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <PromoCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Diskon 40%"
              description="Hemat lebih banyak"
            />
            <PromoCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              }
              title="Gratis Ongkir"
              description="Min. Rp 500.000"
            />
            <PromoCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Garansi Resmi"
              description="Kualitas terjamin"
            />
            <PromoCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
              title="Cicilan 0%"
              description="Hingga 12 bulan"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PromoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors group">
      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-3 group-hover:bg-accent group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-white text-lg">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
}
