import ShimlaCabClient from "./ShimlaCabClient";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, tripLd, faqLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { classicItineraries } from "@/app/data/classicItineraries";
import { classicFaqs } from "@/app/data/seoCopy";

const PATH = "/tours-package/shimla-cab/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH });

export default function Page() {
  preloadHero("kullu-valley");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Himachal Tour Packages", path: "/tours-package/" }, { name: "Shimla Kullu Manali Tour by Cab", path: PATH }]),
          tripLd({
            name: "Shimla Kullu Manali Tour by Cab",
            description: SEO.description,
            path: PATH,
            image: SEO.image,
            days: classicItineraries[PATH],
          }),
          faqLd(classicFaqs("Shimla Kullu Manali tour")),
        ]}
      />
      <ShimlaCabClient />
    </>
  );
}
