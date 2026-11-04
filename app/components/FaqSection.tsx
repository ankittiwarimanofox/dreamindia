import type { Faq } from "@/app/data/seoCopy";

/** Visible FAQ accordion (native <details>). Pair with faqLd() in the page's JSON-LD. */
export default function FaqSection({ faqs, heading = "Frequently asked questions" }: { faqs: Faq[]; heading?: string }) {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-gray-800 mb-8 text-center">{heading}</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white rounded-xl p-5 border border-gray-200">
              <summary className="font-bold text-gray-800 cursor-pointer">{f.q}</summary>
              <p className="text-gray-600 mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
