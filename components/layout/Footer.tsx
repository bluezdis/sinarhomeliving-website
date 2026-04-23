import Link from "next/link";
import Container from "../common/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <Container className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center font-bold text-primary">
              S
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Sinar Home Living</h3>
              <p className="text-white/80 text-sm">
                Toko online terpercaya untuk furniture dan perlengkapan rumah tangga berkualitas.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Pengiriman Cepat</li>
              <li className="text-white/80">Cicilan Tanpa Bunga</li>
              <li className="text-white/80">Garansi Produk</li>
              <li className="text-white/80">Konsultasi Gratis</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp: +62 812 3456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sinarhome.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Email: info@sinarhome.com
                </a>
              </li>
              <li className="text-white/80">
                Jl. Mebel No. 123, Kota, Indonesia
              </li>
              <li className="text-white/80">Jam: 09:00 - 18:00 (Senin-Jumat)</li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Divider */}
      <div className="border-t border-white/20">
        <Container className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Sinar Home Living. Semua hak dilindungi.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
