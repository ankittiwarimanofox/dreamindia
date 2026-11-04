import Blog3Client from "./Blog3Client";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd, articleLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";

const PATH = "/articals/blog3/";
const SEO = pageSeo[PATH];
export const metadata = buildMetadata({ ...SEO, path: PATH, type: "article", published: "2026-05-08T00:00:00+05:30" });

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blogs/" }, { name: "Top 10 Tips for Your First Big Adventure", path: PATH }]),
          articleLd({ headline: "Top 10 Tips For Your First Big Adventure: Travel Tips for First-Timers in India", description: SEO.description, path: PATH, image: SEO.image,
    published: "2026-05-08", }),
        ]}
      />
      <Blog3Client />
    </>
  );
}
