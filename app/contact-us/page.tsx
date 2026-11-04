import ContactClient from "./ContactClient";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";

const PATH = "/contact-us/";
export const metadata = buildMetadata({ ...pageSeo[PATH], path: PATH });

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact Us", path: PATH }])} />
      <ContactClient />
    </>
  );
}
