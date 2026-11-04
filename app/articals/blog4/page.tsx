import Blog4Client from "./Blog4Client";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, articleLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";

const PATH = "/articals/blog4/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH, type: "article", published: "2026-05-05T00:00:00+05:30" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blogs/" }, { name: "The Budget Trekker's Playbook", path: PATH }]),
          articleLd({ headline: "The Budget Trekker's Playbook: Budget Trekking in the Himalayas", description: SEO.description, path: PATH, image: SEO.image,
    published: "2026-05-05", }),
        ]}
      />
      <Blog4Client />
    </>
  );
}
