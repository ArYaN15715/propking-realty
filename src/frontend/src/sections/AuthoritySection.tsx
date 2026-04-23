import { Instagram, Linkedin, MapPin } from "lucide-react";
import { motion } from "motion/react";

const ZONES = [
  {
    name: "Science City",
    tagline: "Ahmedabad's fastest-growing tech corridor",
  },
  {
    name: "SG Highway",
    tagline: "Premium living with world-class connectivity",
  },
  {
    name: "Satellite",
    tagline: "Established locality with top schools & malls",
  },
  {
    name: "Bopal",
    tagline: "Emerging investment zone with high ROI",
  },
];

const SOCIAL = [
  {
    href: "https://instagram.com/thepropkingrealty",
    icon: Instagram,
    handle: "@thepropkingrealty",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/thepropkingrealty",
    icon: Linkedin,
    handle: "THE PROPKING REALTY",
    label: "LinkedIn",
  },
];

export function AuthoritySection() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Subtle geometric pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Our Presence
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4 leading-tight">
            Serving Across Ahmedabad
          </h2>
          <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto leading-relaxed">
            Your trusted partner for property across the city's top growth zones
          </p>
        </motion.div>

        {/* Zone Cards — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {ZONES.map((zone, i) => (
            <motion.div
              key={zone.name}
              className="flex items-start gap-4 bg-white/10 rounded-xl px-5 py-5 border-l-4 border-accent backdrop-blur-sm"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              data-ocid={`authority.zone.${i + 1}`}
            >
              <div className="mt-0.5 text-accent flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-bold text-primary-foreground leading-snug">
                  {zone.name}
                </p>
                <p className="text-sm text-primary-foreground/75 mt-0.5 leading-relaxed">
                  {zone.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">
            Follow Our Journey
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SOCIAL.map(({ href, icon: Icon, handle, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}: ${handle}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary-foreground text-primary font-semibold text-sm transition-smooth hover:border-accent hover:shadow-[0_0_0_2px_theme(colors.yellow.400)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                data-ocid={`authority.social_${label.toLowerCase()}_link`}
              >
                <Icon className="w-4 h-4" />
                {handle}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
