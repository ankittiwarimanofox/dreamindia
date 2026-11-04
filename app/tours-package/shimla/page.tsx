import ShimlaClient from "./ShimlaClient";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, tripLd, faqLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { classicItineraries } from "@/app/data/classicItineraries";
import { classicFaqs } from "@/app/data/seoCopy";

const PATH = "/tours-package/shimla/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH });

export default function Page() {
  preloadHero("hadimba-temple");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Himachal Tour Packages", path: "/tours-package/" }, { name: "Shimla Manali Chandigarh Honeymoon Package", path: PATH }]),
          tripLd({
            name: "Shimla Manali Chandigarh Honeymoon Package",
            description: SEO.description,
            path: PATH,
            image: SEO.image,
            days: classicItineraries[PATH],
          }),
          faqLd(classicFaqs("shimla honeymoon package")),
        ]}
      />
      <ShimlaClient />
    </>
  );
}
