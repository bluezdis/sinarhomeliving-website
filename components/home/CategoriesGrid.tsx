import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import Container from "../common/Container";

export default function CategoriesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Semua kebutuhan <span className="italic">rumah Anda</span>, dalam satu toko.
          </h2>
          <p className="text-foreground/70 text-lg">
            Dari ruang tamu, kamar tidur, dapur hingga ruang kerja. Telusuri kategori di bawah atau lihat koleksi produk lengkap kami.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Large card - Sofa (Row 1-2, Col 1) */}
          {categories[0] && (
            <Link href={`/produk?kategori=${categories[0].slug}`}>
              <div className="group cursor-pointer md:row-span-2 relative overflow-hidden rounded-3xl h-64 md:h-auto md:min-h-96">
                <Image
                  src={categories[0].image}
                  alt={categories[0].name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                  <div></div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-semibold mb-2">
                        {categories[0].subtitle}
                      </p>
                      <h3 className="text-white text-2xl md:text-3xl font-bold">
                        {categories[0].name}
                      </h3>
                    </div>
                    <button className="bg-white rounded-full p-3 hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Top right 2x2 grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Kasur */}
            {categories[1] && (
              <Link href={`/produk?kategori=${categories[1].slug}`}>
                <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-48 md:h-56">
                  <Image
                    src={categories[1].image}
                    alt={categories[1].name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/80 text-xs font-semibold mb-1">
                          {categories[1].subtitle}
                        </p>
                        <h3 className="text-white text-xl font-bold">
                          {categories[1].name}
                        </h3>
                      </div>
                      <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Lemari */}
            {categories[2] && (
              <Link href={`/produk?kategori=${categories[2].slug}`}>
                <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-48 md:h-56">
                  <Image
                    src={categories[2].image}
                    alt={categories[2].name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/80 text-xs font-semibold mb-1">
                          {categories[2].subtitle}
                        </p>
                        <h3 className="text-white text-xl font-bold">
                          {categories[2].name}
                        </h3>
                      </div>
                      <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Meja */}
            {categories[3] && (
              <Link href={`/produk?kategori=${categories[3].slug}`}>
                <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-48 md:h-56">
                  <Image
                    src={categories[3].image}
                    alt={categories[3].name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/80 text-xs font-semibold mb-1">
                          {categories[3].subtitle}
                        </p>
                        <h3 className="text-white text-xl font-bold">
                          {categories[3].name}
                        </h3>
                      </div>
                      <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Rak */}
            {categories[4] && (
              <Link href={`/produk?kategori=${categories[4].slug}`}>
                <div className="group cursor-pointer relative overflow-hidden rounded-3xl h-48 md:h-56">
                  <Image
                    src={categories[4].image}
                    alt={categories[4].name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/80 text-xs font-semibold mb-1">
                          {categories[4].subtitle}
                        </p>
                        <h3 className="text-white text-xl font-bold">
                          {categories[4].name}
                        </h3>
                      </div>
                      <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Bottom full width - Furniture Kantor */}
          {categories[5] && (
            <Link href={`/produk?kategori=${categories[5].slug}`}>
              <div className="group cursor-pointer md:col-span-2 relative overflow-hidden rounded-3xl h-48 md:h-56">
                <Image
                  src={categories[5].image}
                  alt={categories[5].name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                  <div></div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-semibold mb-2">
                        {categories[5].subtitle}
                      </p>
                      <h3 className="text-white text-2xl font-bold">
                        {categories[5].name}
                      </h3>
                    </div>
                    <button className="bg-white rounded-full p-3 hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
