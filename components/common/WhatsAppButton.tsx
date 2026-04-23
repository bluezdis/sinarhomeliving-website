"use client";

interface WhatsAppButtonProps {
  message?: string;
  fixed?: boolean;
  className?: string;
}

export default function WhatsAppButton({
  message = "Halo, saya tertarik dengan produk Sinar Home Living",
  fixed = false,
  className = "",
}: WhatsAppButtonProps) {
  const phoneNumber = "628123456789"; // Replace with actual business number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const baseStyles = fixed
    ? "fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl"
    : "";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 ${baseStyles} ${className}`}
      aria-label="Contact via WhatsApp"
      title="Chat di WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.336 1.236-3.155 2.164C5.25 10.854 4.75 12.745 4.75 14.675c0 .428.035.847.105 1.256l-1.12 4.084c-.335 1.22.577 2.365 1.816 2.016l3.898-1.324c.47.25 1.023.459 1.638.626 1.327.35 2.81.236 4.118-.421 1.308-.657 2.427-1.645 3.152-2.891.726-1.246 1.125-2.697 1.125-4.188 0-1.993-.628-3.859-1.806-5.406-1.178-1.547-2.754-2.574-4.524-2.922-.887-.176-1.782-.183-2.623-.021z" />
      </svg>
    </a>
  );
}
