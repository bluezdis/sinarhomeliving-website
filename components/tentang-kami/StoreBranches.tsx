"use client";

import { useState } from "react";
import Container from "@/components/common/Container";

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbed: string;
}

const branches: Branch[] = [
  {
    id: "alun-alun",
    name: "Cabang Alun-alun",
    address: "Jl. Siliwangi No. 45, Dekat Alun-alun Purwakarta, Jawa Barat 41115",
    phone: "0812-3456-7890",
    hours: "Senin - Minggu: 08.00 - 21.00 WIB",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d107.4361!3d-6.5561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzMnMjIuMCJTIDEwN8KwMjYnMTAuMCJF!5e0!3m2!1sen!2sid!4v1234567890",
  },
  {
    id: "ciseureuh",
    name: "Cabang Ciseureuh",
    address: "Jl. Raya Ciseureuh No. 88, Ciseureuh, Purwakarta, Jawa Barat 41118",
    phone: "0812-9876-5432",
    hours: "Senin - Sabtu: 08.00 - 20.00 WIB",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d107.4500!3d-6.5700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnMTIuMCJTIDEwN8KwMjcnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567891",
  },
  {
    id: "sadang",
    name: "Cabang Sadang",
    address: "Jl. Raya Sadang No. 123, Sadang, Purwakarta, Jawa Barat 41163",
    phone: "0813-1234-5678",
    hours: "Senin - Minggu: 09.00 - 21.00 WIB",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d107.4200!3d-6.5400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzInMjQuMCJTIDEwN8KwMjUnMTIuMCJF!5e0!3m2!1sen!2sid!4v1234567892",
  },
  {
    id: "plered",
    name: "Cabang Plered",
    address: "Jl. Raya Plered No. 56, Plered, Purwakarta, Jawa Barat 41162",
    phone: "0815-6789-0123",
    hours: "Senin - Sabtu: 08.30 - 20.30 WIB",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d107.4100!3d-6.5300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnNDguMCJTIDEwN8KwMjQnMzYuMCJF!5e0!3m2!1sen!2sid!4v1234567893",
  },
];

export default function StoreBranches() {
  const [activeTab, setActiveTab] = useState(branches[0].id);
  const activeBranch = branches.find((b) => b.id === activeTab) || branches[0];

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest mb-4">
            LOKASI TOKO KAMI
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kunjungi Cabang Kami di Purwakarta
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Kami memiliki 4 cabang yang tersebar di area Purwakarta untuk memudahkan Anda menemukan furniture impian.
          </p>
        </div>

        {/* Tabs and Content Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-border">
            {branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveTab(branch.id)}
                className={`flex-1 min-w-[140px] px-4 py-4 md:py-5 text-sm md:text-base font-medium transition-all duration-200 relative ${
                  activeTab === branch.id
                    ? "text-primary bg-primary/5"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="relative z-10">{branch.name}</span>
                {activeTab === branch.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Branch Details */}
            <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Branch Name */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {activeBranch.name}
                  </h3>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/50 uppercase tracking-wide mb-1">
                      Alamat
                    </p>
                    <p className="text-foreground leading-relaxed">
                      {activeBranch.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/50 uppercase tracking-wide mb-1">
                      Telepon
                    </p>
                    <a
                      href={`tel:${activeBranch.phone.replace(/-/g, "")}`}
                      className="text-primary font-medium hover:text-primary-dark transition-colors"
                    >
                      {activeBranch.phone}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/50 uppercase tracking-wide mb-1">
                      Jam Operasional
                    </p>
                    <p className="text-foreground">{activeBranch.hours}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/62${activeBranch.phone.replace(/^0/, "").replace(/-/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors mt-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hubungi Cabang Ini
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:col-span-3 h-[300px] md:h-[400px] lg:h-auto lg:min-h-[450px] bg-secondary">
              <iframe
                src={activeBranch.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Peta lokasi ${activeBranch.name}`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Branch Quick Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveTab(branch.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                activeTab === branch.id
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-white border-border hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${
                  activeTab === branch.id ? "bg-white/20" : "bg-primary/10"
                }`}
              >
                <svg
                  className={`w-4 h-4 ${
                    activeTab === branch.id ? "text-white" : "text-primary"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <p
                className={`font-semibold text-sm ${
                  activeTab === branch.id ? "text-white" : "text-foreground"
                }`}
              >
                {branch.name}
              </p>
              <p
                className={`text-xs mt-1 line-clamp-1 ${
                  activeTab === branch.id ? "text-white/80" : "text-foreground/60"
                }`}
              >
                {branch.address.split(",")[0]}
              </p>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
