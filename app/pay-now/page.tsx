import PayNowClient from "./PayNowClient";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata, breadcrumbLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";

const PATH = "/pay-now/";
export const metadata = buildMetadata({ ...pageSeo[PATH], path: PATH, noindex: true });

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pay Now", path: PATH }])} />
      <PayNowClient />
    </>
  );
}
