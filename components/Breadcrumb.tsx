import Link from 'next/link';

type BreadcrumbItem = { name: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 text-sm text-gray-400 tracking-wider">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-[#8B7355] transition-colors">ホーム</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span>/</span>
            {item.href ? <Link href={item.href} className="hover:text-[#8B7355] transition-colors">{item.name}</Link> : <span className="text-[#2C2C2C]/70">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
