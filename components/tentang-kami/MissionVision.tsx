import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import Card from '@/components/common/Card'

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-secondary-light">
      <Container>
        <SectionTitle 
          title="Visi & Misi" 
          subtitle="Komitmen Kami untuk Anda"
          centered
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
            <p className="text-foreground/80 leading-relaxed">
              Menjadi perusahaan furniture terdepan yang menyediakan solusi rumah berkualitas tinggi dengan harga terjangkau, sehingga setiap keluarga Indonesia dapat memiliki rumah impian yang nyaman dan indah.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Misi Kami</h3>
            <div className="space-y-3 text-foreground/80">
              <p>• Menyediakan furniture berkualitas tinggi dengan desain modern</p>
              <p>• Memberikan harga yang kompetitif dan terjangkau</p>
              <p>• Memberikan layanan pelanggan terbaik di kelasnya</p>
              <p>• Terus berinovasi untuk memenuhi kebutuhan pasar</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
