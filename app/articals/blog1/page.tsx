import Blog1Client from "./Blog1Client";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, articleLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";

const PATH = "/articals/blog1/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH, type: "article", published: "2025-10-24T00:00:00+05:30" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blogs/" }, { name: "The Spiritual Journey Through Ancient Ghats", path: PATH }]),
          articleLd({ headline: "The Spiritual Journey Through Ancient Ghats: A Varanasi Travel Guide", description: SEO.description, path: PATH, image: SEO.image,
    published: "2025-10-24", }),
        ]}
      />
      <Blog1Client />
    </>
  );
}
