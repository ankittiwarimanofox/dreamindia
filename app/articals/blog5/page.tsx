import Blog5Client from "./Blog5Client";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, articleLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";

const PATH = "/articals/blog5/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH, type: "article", published: "2026-05-01T00:00:00+05:30" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blogs/" }, { name: "Comfort Meets Nature", path: PATH }]),
          articleLd({ headline: "Comfort Meets Nature: Luxury Resorts and Eco-Stays in India", description: SEO.description, path: PATH, image: SEO.image,
    published: "2026-05-01", }),
        ]}
      />
      <Blog5Client />
    </>
  );
}
