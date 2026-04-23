'use client'

import { useState, FormEvent } from 'react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productInterest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In the future, this will connect to a backend API
      console.log('[v0] Form data submitted:', formData)
      
      setSubmitMessage('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        productInterest: ''
      })
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    } catch (error) {
      console.error('[v0] Form submission error:', error)
      setSubmitMessage('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-8 max-w-2xl">
      <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan</h3>
      
      {submitMessage && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitMessage.includes('Terima kasih') 
            ? 'bg-success/10 text-success' 
            : 'bg-error/10 text-error'
        }`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="08123456789"
          />
        </div>

        <div>
          <label htmlFor="productInterest" className="block text-sm font-medium text-foreground mb-2">
            Produk yang Diminati
          </label>
          <select
            id="productInterest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Pilih kategori produk...</option>
            <option value="sofa">Sofa & Kursi</option>
            <option value="kasur">Kasur & Springbed</option>
            <option value="lemari">Lemari (Plastik & Besi)</option>
            <option value="meja">Meja (Belajar & Rias)</option>
            <option value="rak">Rak (Piring, Sayur, dll)</option>
            <option value="furniture-kantor">Furniture Kantor</option>
            <option value="aksesori">Aksesori Rumah Tangga</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="Tuliskan pesan Anda..."
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
        </Button>
      </form>
    </Card>
  )
}
