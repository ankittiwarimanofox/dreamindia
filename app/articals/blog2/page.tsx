import Blog2Client from "./Blog2Client";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, articleLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";

const PATH = "/articals/blog2/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH, type: "article", published: "2026-05-10T00:00:00+05:30" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blogs/" }, { name: "Exploring the Hidden Gems of Himachal", path: PATH }]),
          articleLd({ headline: "Exploring the Hidden Gems of Himachal", description: SEO.description, path: PATH, image: SEO.image,
    published: "2026-05-10", }),
        ]}
      />
      <Blog2Client />
    </>
  );
}
