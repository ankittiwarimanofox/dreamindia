import Link from "next/link";

/** Blog-to-package call to action. */
export default function BlogCta({ heading, text, links }: { heading: string; text: string; links: { href: string; label: string }[] }) {
  return (
    <aside className="my-14 rounded-3xl bg-[#004381] text-white p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-black mb-3">{heading}</h2>
      <p className="text-blue-100 mb-6">{text}</p>
      <div className="flex flex-wrap gap-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="bg-[#B35F00] hover:bg-[#8A5C0E] text-white font-bold px-5 py-3 rounded-xl">
            {l.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
