import { SITE_CONFIG } from "@/lib/constants";
import { educationData } from "@/data/achievements";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jorge Joshua Neyra Caldas",
    alternateName: "Jorge Neyra",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.links.email,
    jobTitle: "Full Stack & AI Engineer",
    description: SITE_CONFIG.description,
    alumniOf: educationData.map(edu => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: edu.location.split(", ")[0],
        addressCountry: edu.location.split(", ")[1],
      },
    })),
    knowsAbout: [
      "Cloud Computing",
      "Full Stack Development",
      "Machine Learning",
      "Blockchain",
      "AWS",
      "Generative AI",
      "React",
      "Node.js",
      "Python",
      "TypeScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}