"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log and show a message
    console.log("Form data:", formData);
    alert(
      "Terima kasih! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Telepon",
      content: "+62 812 3456 789",
      link: "tel:+628123456789",
    },
    {
      icon: "📧",
      title: "Email",
      content: "info@sinarhome.com",
      link: "mailto:info@sinarhome.com",
    },
    {
      icon: "📍",
      title: "Alamat",
      content: "Jl. Mebel No. 123, Kota, Indonesia",
      link: "#",
    },
    {
      icon: "🕐",
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 18:00",
      link: "#",
    },
  ];

  return (
    <>
      <div className="bg-secondary py-8 md:py-12">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Hubungi Kami
          </h1>
          <p className="text-muted mt-2">
            Ada pertanyaan? Kami siap membantu Anda!
          </p>
        </Container>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link}>
                <Card hover>
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground/80 text-sm font-medium hover:text-primary transition-colors">
                    {info.content}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Kirim Pesan Kepada Kami
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Nama Anda"
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
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
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
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                    Produk yang Diinginkan (Opsional)
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Nama produk yang Anda cari"
                  />
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
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Map & Quick Info */}
            <div className="space-y-6">
              <Card className="bg-background h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🗺️</div>
                  <p className="text-muted font-medium">
                    Google Maps akan ditampilkan di sini
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className="font-bold text-foreground text-lg mb-4">
                  Mengapa Memilih Kami?
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span>Produk berkualitas dari supplier terpercaya</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span>Harga kompetitif dan transparan</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span>Customer service ramah dan responsif</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span>Pengiriman aman dan tepat waktu</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span>Berbagai pilihan cicilan</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Butuh Bantuan Cepat?
            </h2>
            <p className="text-lg text-white/90">
              Chat langsung dengan tim kami melalui WhatsApp untuk respon cepat dan solusi terbaik.
            </p>
            <Button
              href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20Sinar%20Home%20Living"
              variant="secondary"
              size="lg"
            >
              Chat WhatsApp Sekarang
            </Button>
          </div>
        </Container>
      </section>

      <WhatsAppButton fixed />
    </>
  );
}
