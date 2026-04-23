import Card from '@/components/common/Card'

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  highlight?: boolean
}

function ContactItem({ icon, label, value, href, highlight = false }: ContactItemProps) {
  const content = (
    <div className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
      highlight 
        ? 'bg-primary text-white' 
        : 'bg-secondary/50 hover:bg-secondary'
    }`}>
      <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-transform duration-300 group-hover:scale-110 ${
        highlight ? 'bg-white/20' : 'bg-primary/10'
      }`}>
        <span className={highlight ? 'text-white' : 'text-primary'}>{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-xs font-medium uppercase tracking-wider mb-0.5 ${
          highlight ? 'text-white/70' : 'text-muted'
        }`}>{label}</p>
        <p className={`font-semibold truncate ${
          highlight ? 'text-white' : 'text-foreground'
        }`}>{value}</p>
      </div>
      {href && (
        <svg 
          className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
            highlight ? 'text-white/70' : 'text-primary/50'
          }`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-3">
          Kontak
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Mari Terhubung
        </h3>
        <p className="text-muted">
          Pilih cara yang paling nyaman untuk menghubungi kami
        </p>
      </div>
      
      {/* Contact Cards */}
      <Card className="p-6 space-y-3">
        <ContactItem
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          }
          label="WhatsApp"
          value="+62 812 3456 7890"
          href="https://wa.me/6281234567890?text=Halo%20Sinar%20Home%20Living"
          highlight
        />

        <ContactItem
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
          label="Telepon"
          value="+62 21 5555 1234"
          href="tel:+62215551234"
        />

        <ContactItem
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          label="Email"
          value="info@sinarhomeliving.com"
          href="mailto:info@sinarhomeliving.com"
        />

        <ContactItem
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label="Alamat"
          value="Jl. Raya Furniture No. 123, Jakarta Selatan"
        />
      </Card>

      {/* Operating Hours */}
      <Card className="p-6 bg-secondary/30 border-dashed">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-3">Jam Operasional</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Senin - Jumat</span>
              </div>
              <span className="text-foreground font-medium">09:00 - 18:00</span>
              <div className="flex justify-between">
                <span className="text-muted">Sabtu</span>
              </div>
              <span className="text-foreground font-medium">09:00 - 17:00</span>
              <div className="flex justify-between">
                <span className="text-muted">Minggu</span>
              </div>
              <span className="text-foreground font-medium">10:00 - 16:00</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
