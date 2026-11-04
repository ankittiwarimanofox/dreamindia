import Link from "next/link";

export type Crumb = { name: string; href?: string };

/** Slim visible breadcrumb bar. Pair with breadcrumbLd() in the page's JSON-LD. */
export default function BreadcrumbNav({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
      <ol className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-2">
            {c.href && i < items.length - 1 ? (
              <Link href={c.href} className="hover:text-[#B35F00] underline underline-offset-2">{c.name}</Link>
            ) : (
              <span aria-current={i === items.length - 1 ? "page" : undefined} className="text-gray-700">{c.name}</span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
