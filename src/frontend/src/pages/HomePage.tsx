import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, lazy, useEffect } from "react";

const HeroSection = lazy(() =>
  import("../sections/HeroSection").then((m) => ({ default: m.HeroSection })),
);
const PropertyGrid = lazy(() =>
  import("../sections/PropertyGrid").then((m) => ({ default: m.PropertyGrid })),
);
const ProcessSection = lazy(() =>
  import("../sections/ProcessSection").then((m) => ({
    default: m.ProcessSection,
  })),
);
const TestimonialsSection = lazy(() =>
  import("../sections/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const AuthoritySection = lazy(() =>
  import("../sections/AuthoritySection").then((m) => ({
    default: m.AuthoritySection,
  })),
);
const InvestmentSection = lazy(() =>
  import("../sections/InvestmentSection").then((m) => ({
    default: m.InvestmentSection,
  })),
);
const LeadCaptureSection = lazy(() =>
  import("../sections/LeadCaptureSection").then((m) => ({
    default: m.LeadCaptureSection,
  })),
);
const RecommendedSection = lazy(() =>
  import("../sections/RecommendedSection").then((m) => ({
    default: m.RecommendedSection,
  })),
);
const ComparisonSection = lazy(() =>
  import("../sections/ComparisonSection").then((m) => ({
    default: m.ComparisonSection,
  })),
);
const SocialFeedSection = lazy(() =>
  import("../sections/SocialFeedSection").then((m) => ({
    default: m.SocialFeedSection,
  })),
);
const FAQSection = lazy(() =>
  import("../sections/FAQSection").then((m) => ({ default: m.FAQSection })),
);

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "THE PROPKING REALTY",
  description:
    "Ahmedabad's trusted real estate consultants for residential, investment and premium properties near SG Highway, Science City, Satellite and more.",
  url: "https://propkingrealty.com",
  telephone: "+917906556009",
  email: "info@propkingrealty.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  areaServed: [
    "Science City",
    "SG Highway",
    "Satellite",
    "Bopal",
    "Prahlad Nagar",
    "Thaltej",
    "Ambli",
    "Shela",
  ],
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹₹",
  sameAs: [
    "https://www.instagram.com/propkingrealty",
    "https://www.linkedin.com/company/propkingrealty",
  ],
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "THE PROPKING REALTY",
  url: "https://propkingrealty.com",
  logo: "https://propkingrealty.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917906556009",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: [
    "https://www.instagram.com/propkingrealty",
    "https://www.linkedin.com/company/propkingrealty",
  ],
};

function injectSchemas(schemas: object[]): () => void {
  const elements: HTMLScriptElement[] = schemas.map((schema) => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(schema);
    el.setAttribute("data-schema", "homepage");
    document.head.appendChild(el);
    return el;
  });
  return () => {
    for (const el of elements) {
      el.remove();
    }
  };
}

function useHomepageSchemas() {
  useEffect(() => {
    return injectSchemas([LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA]);
  }, []);
}

function SectionFallback() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <Skeleton className="h-8 w-48 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-48 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export function HomePage() {
  useHomepageSchemas();

  return (
    <div>
      <Suspense fallback={<SectionFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PropertyGrid />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AuthoritySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <InvestmentSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <LeadCaptureSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <RecommendedSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ComparisonSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SocialFeedSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
    </div>
  );
}
