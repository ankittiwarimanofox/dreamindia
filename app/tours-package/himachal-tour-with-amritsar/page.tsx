import AmritsarClient from "./AmritsarClient";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, tripLd, faqLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { classicItineraries } from "@/app/data/classicItineraries";
import { classicFaqs } from "@/app/data/seoCopy";

const PATH = "/tours-package/himachal-tour-with-amritsar/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH });

export default function Page() {
  preloadHero("golden-temple");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Himachal Tour Packages", path: "/tours-package/" }, { name: "Himachal Tour with Amritsar (6 Days)", path: PATH }]),
          tripLd({
            name: "Himachal Tour with Amritsar (6 Days)",
            description: SEO.description,
            path: PATH,
            image: SEO.image,
            days: classicItineraries[PATH],
          }),
          faqLd(classicFaqs("6-day Himachal tour with Amritsar")),
        ]}
      />
      <AmritsarClient />
    </>
  );
}
