import Link from "next/link";

type Props = {
  heading: string;
  paragraphs: string[];
  links?: { href: string; label: string }[];
};

/** Plain, server-rendered text block with natural keywords and contextual links. */
export default function SeoIntro({ heading, paragraphs, links }: Props) {
  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-gray-800 mb-6">{heading}</h2>
        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
          {paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        {links && links.length > 0 && (
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-bold">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#1D70B7] hover:text-[#B35F00] underline underline-offset-4">
                {l.label}
              </Link>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
