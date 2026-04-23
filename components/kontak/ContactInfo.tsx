import Card from '@/components/common/Card'

interface ContactItemProps {
  icon: string
  label: string
  value: string
  href?: string
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm font-medium text-muted mb-1">{label}</p>
        <p className="text-foreground font-semibold">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary mb-6">Hubungi Kami</h3>
      
      <Card className="p-6">
        <ContactItem
          icon="📞"
          label="Telepon"
          value="+62 21 5555 1234"
          href="tel:+6215555124"
        />
      </Card>

      <Card className="p-6">
        <ContactItem
          icon="💬"
          label="WhatsApp"
          value="+62 812 3456 7890"
          href="https://wa.me/6281234567890?text=Halo%20Sinar%20Home%20Living"
        />
      </Card>

      <Card className="p-6">
        <ContactItem
          icon="📧"
          label="Email"
          value="info@sinarhomeliving.com"
          href="mailto:info@sinarhomeliving.com"
        />
      </Card>

      <Card className="p-6">
        <ContactItem
          icon="📍"
          label="Alamat"
          value="Jl. Raya Furniture No. 123, Jakarta Selatan 12345, Indonesia"
        />
      </Card>

      <Card className="p-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted mb-4">Jam Operasional</p>
          <div className="space-y-1 text-foreground">
            <p><span className="font-medium">Senin - Jumat:</span> 09:00 - 18:00</p>
            <p><span className="font-medium">Sabtu:</span> 09:00 - 17:00</p>
            <p><span className="font-medium">Minggu:</span> 10:00 - 16:00</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
