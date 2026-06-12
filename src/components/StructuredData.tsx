import { siteMetadata } from "@/lib/metadata";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OminiMesh",
  description: "AI-powered global connectivity platform unifying Wi-Fi, fiber, towers, satellites, eSIM, payments, and intelligent routing.",
  url: siteMetadata.url,
  logo: `${siteMetadata.url}/omnimesh-logo.svg`,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@ominimesh.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OminiMesh",
  url: siteMetadata.url,
  description: siteMetadata.description,
  inLanguage: "en-US",
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
