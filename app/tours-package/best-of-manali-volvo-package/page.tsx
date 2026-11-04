import ManaliVolvoClient from "./ManaliVolvoClient";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, tripLd, faqLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { classicItineraries } from "@/app/data/classicItineraries";
import { classicFaqs } from "@/app/data/seoCopy";

const PATH = "/tours-package/best-of-manali-volvo-package/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH });

export default function Page() {
  preloadHero("solang-valley");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Himachal Tour Packages", path: "/tours-package/" }, { name: "Best of Manali Volvo Package", path: PATH }]),
          tripLd({
            name: "Best of Manali Volvo Package",
            description: SEO.description,
            path: PATH,
            image: SEO.image,
            days: classicItineraries[PATH],
    price: 8999,
    priceNote: "Starting price shown on the page; confirm for your travel dates.",
          }),
          faqLd(classicFaqs("Manali Volvo package")),
        ]}
      />
      <ManaliVolvoClient />
    </>
  );
}
