import HomeClient from "./HomeClient";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, websiteLd, faqLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { homeFaqs } from "@/app/data/seoCopy";

export const metadata = buildMetadata({ ...pageSeo["/"], path: "/" });

export default function Page() {
  preloadHero("kullu-valley");
  return (
    <>
      <JsonLd data={[websiteLd(), faqLd(homeFaqs)]} />
      <HomeClient />
    </>
  );
}
