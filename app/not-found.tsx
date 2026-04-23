import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <Container>
        <div className="text-center space-y-6 max-w-md mx-auto">
          <div className="text-8xl font-bold text-primary">404</div>
          <h1 className="text-4xl font-bold text-foreground">Halaman Tidak Ditemukan</h1>
          <p className="text-lg text-foreground/80">
            Maaf, halaman yang Anda cari tidak ditemukan. Mungkin halaman telah dihapus atau URL Anda salah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" size="lg">
              Kembali ke Beranda
            </Button>
            <Button href="/produk" variant="secondary" size="lg">
              Lihat Produk
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
