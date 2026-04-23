import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <>
                <Link
                  href={item.href}
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <span className="mx-2 text-muted">/</span>
                )}
              </>
            ) : (
              <>
                <span className="text-foreground font-medium">{item.label}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
