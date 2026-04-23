import Image from 'next/image'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'

export default function CompanyStory() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-secondary h-96 rounded-lg flex items-center justify-center text-muted">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">Toko Kami</p>
                <p className="text-sm">Jl. Raya Furniture, Jakarta Selatan</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <SectionTitle 
              title="Cerita Kami" 
              subtitle="Perjalanan Sinar Home Living"
            />
            <div className="space-y-4 text-foreground/80">
              <p>
                Sinar Home Living didirikan dengan misi untuk membawa kualitas dan kenyamanan ke setiap rumah di Indonesia. Dengan pengalaman lebih dari 15 tahun, kami telah menjadi pilihan utama untuk furniture rumah tangga berkualitas tinggi.
              </p>
              <p>
                Kami percaya bahwa rumah bukan hanya sekadar tempat tinggal, tetapi ruang di mana keluarga berkumpul dan menciptakan kenangan indah. Oleh karena itu, setiap produk kami dipilih dengan cermat untuk memastikan kualitas terbaik dan harga yang kompetitif.
              </p>
              <p>
                Komitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dan memuaskan bagi setiap pelanggan, dengan layanan purna jual yang responsif dan terpercaya.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
