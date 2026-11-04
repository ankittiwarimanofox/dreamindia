import ShimlaVolvoClient from "./ShimlaVolvoClient";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, tripLd, faqLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { classicItineraries } from "@/app/data/classicItineraries";
import { classicFaqs } from "@/app/data/seoCopy";

const PATH = "/tours-package/shimla-volvo-package/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH });

export default function Page() {
  preloadHero("shimla-town");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Himachal Tour Packages", path: "/tours-package/" }, { name: "Best of Shimla Volvo Tour", path: PATH }]),
          tripLd({
            name: "Best of Shimla Volvo Tour",
            description: SEO.description,
            path: PATH,
            image: SEO.image,
            days: classicItineraries[PATH],
    price: 5999,
    priceNote: "Starting price shown on the page; confirm for your travel dates.",
          }),
          faqLd(classicFaqs("Shimla Volvo tour")),
        ]}
      />
      <ShimlaVolvoClient />
    </>
  );
}
