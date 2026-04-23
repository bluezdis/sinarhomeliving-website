import Card from '@/components/common/Card'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  details?: string[]
}

export default function ServiceCard({ 
  title, 
  description, 
  icon,
  details 
}: ServiceCardProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-foreground/80 mb-4">{description}</p>
      {details && (
        <ul className="space-y-2 text-sm text-foreground/70">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
