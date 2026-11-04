import DharamshalaDalhousieClient from "./DharamshalaDalhousieClient";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, tripLd, faqLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { classicItineraries } from "@/app/data/classicItineraries";
import { classicFaqs } from "@/app/data/seoCopy";

const PATH = "/tours-package/kullu-manali-tour/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH });

export default function Page() {
  preloadHero("khajjiar-dalhousie");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Himachal Tour Packages", path: "/tours-package/" }, { name: "Dharamshala Dalhousie Tour", path: PATH }]),
          tripLd({
            name: "Dharamshala Dalhousie Tour",
            description: SEO.description,
            path: PATH,
            image: SEO.image,
            days: classicItineraries[PATH],
          }),
          faqLd(classicFaqs("Dharamshala Dalhousie tour")),
        ]}
      />
      <DharamshalaDalhousieClient />
    </>
  );
}
