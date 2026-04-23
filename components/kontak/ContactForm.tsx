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
  const [focusedField, setFocusedField] = useState<string | null>(null)

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
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitMessage('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        productInterest: ''
      })
      
      setTimeout(() => setSubmitMessage(''), 5000)
    } catch {
      setSubmitMessage('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputBaseStyles = "w-full px-4 py-3 bg-background border-2 border-border rounded-xl transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white placeholder:text-muted/60"

  return (
    <Card className="p-0 overflow-hidden">
      {/* Form Header */}
      <div className="bg-primary px-8 py-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Kirim Pesan</h3>
        </div>
        <p className="text-white/80 text-sm">
          Isi formulir di bawah dan kami akan menghubungi Anda segera
        </p>
      </div>

      {/* Form Body */}
      <div className="p-8">
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
            submitMessage.includes('Terima kasih') 
              ? 'bg-success/10 text-success border border-success/20' 
              : 'bg-error/10 text-error border border-error/20'
          }`}>
            {submitMessage.includes('Terima kasih') ? (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <span className="text-sm font-medium">{submitMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email Row */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="relative">
              <label 
                htmlFor="name" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' || formData.name 
                    ? '-top-2.5 text-xs bg-white px-1 text-primary font-medium' 
                    : 'top-3 text-muted'
                }`}
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputBaseStyles}
              />
            </div>
            <div className="relative">
              <label 
                htmlFor="email" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' || formData.email 
                    ? '-top-2.5 text-xs bg-white px-1 text-primary font-medium' 
                    : 'top-3 text-muted'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputBaseStyles}
              />
            </div>
          </div>

          {/* Phone & Product Interest Row */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="relative">
              <label 
                htmlFor="phone" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'phone' || formData.phone 
                    ? '-top-2.5 text-xs bg-white px-1 text-primary font-medium' 
                    : 'top-3 text-muted'
                }`}
              >
                Nomor Telepon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={inputBaseStyles}
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
                className={`${inputBaseStyles} cursor-pointer`}
              >
                <option value="">Pilih kategori...</option>
                <option value="sofa">Sofa &amp; Kursi</option>
                <option value="kasur">Kasur &amp; Springbed</option>
                <option value="lemari">Lemari (Plastik &amp; Besi)</option>
                <option value="meja">Meja (Belajar &amp; Rias)</option>
                <option value="rak">Rak (Piring, Sayur, dll)</option>
                <option value="furniture-kantor">Furniture Kantor</option>
                <option value="aksesori">Aksesori Rumah Tangga</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label 
              htmlFor="message" 
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                focusedField === 'message' || formData.message 
                  ? '-top-2.5 text-xs bg-white px-1 text-primary font-medium z-10' 
                  : 'top-3 text-muted'
              }`}
            >
              Pesan Anda
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
              rows={4}
              className={`${inputBaseStyles} resize-none`}
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 text-base"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Mengirim...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Kirim Pesan
              </span>
            )}
          </Button>
        </form>
      </div>
    </Card>
  )
}
