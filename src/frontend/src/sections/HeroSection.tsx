import { motion } from "motion/react";

const stats = [
  { value: "1000+", label: "Clients Served" },
  { value: "50+", label: "Locations Covered" },
  { value: "10+", label: "Years of Experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero — Find Smarter Property Deals in Ahmedabad"
    >
      {/* ── Skyscraper background image ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0"
      >
        {/* Background photo */}
        <img
          src="/assets/generated/hero-skyline.dim_1920x1080.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        {/* Deep blue gradient overlay — top to bottom for sky feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,18,34,0.72) 0%, rgba(15,28,48,0.58) 40%, rgba(15,28,48,0.55) 70%, rgba(10,22,40,0.80) 100%)",
          }}
        />
        {/* Subtle vignette on sides */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 100% at 50% 50%, transparent 50%, rgba(5,12,26,0.45) 100%)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 md:px-8 py-24 md:py-0 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-5"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{
              background: "rgba(224,165,43,0.18)",
              color: "#F5D98A",
              border: "1px solid rgba(224,165,43,0.4)",
              backdropFilter: "blur(8px)",
            }}
            data-ocid="hero.badge"
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative star */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L8.8 5.2L13.5 5.6L10.1 8.5L11.2 13.1L7 10.5L2.8 13.1L3.9 8.5L0.5 5.6L5.2 5.2L7 1Z"
                fill="#E0A52B"
              />
            </svg>
            Ahmedabad's Trusted Property Advisors
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display font-bold leading-[1.1] tracking-tight mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: "#FFFFFF" }}
        >
          Find Smarter Property Deals{" "}
          <span className="relative inline-block" style={{ color: "#F5D98A" }}>
            in Ahmedabad
            {/* Gold underline accent */}
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative underline */}
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              viewBox="0 0 220 8"
              fill="none"
            >
              <path
                d="M2 6 Q55 2 110 5 Q165 8 218 4"
                stroke="#E0A52B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl font-body max-w-xl leading-relaxed mb-8"
          style={{ color: "rgba(220,232,255,0.88)" }}
        >
          Helping You Buy, Sell &amp; Invest with Confidence
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-14"
        >
          <button
            type="button"
            aria-label="Explore our property listings"
            onClick={() => scrollTo("#properties")}
            className="group relative px-7 py-3.5 rounded-xl font-semibold text-base overflow-hidden transition-all duration-200 shadow-card hover:shadow-elevated hover:-translate-y-0.5"
            style={{
              background: "#1F3A5F",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            data-ocid="hero.explore_button"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: "#E0A52B" }}
            />
            <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-200 flex items-center gap-2 justify-center">
              Explore Properties
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative arrow */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <button
            type="button"
            aria-label="Get expert property advice"
            onClick={() => scrollTo("#lead-capture")}
            className="group px-7 py-3.5 rounded-xl font-semibold text-base border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            style={{
              borderColor: "rgba(255,255,255,0.6)",
              color: "#FFFFFF",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
            data-ocid="hero.expert_button"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "#E0A52B";
              (e.currentTarget as HTMLButtonElement).style.color = "#E0A52B";
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(224,165,43,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.08)";
            }}
          >
            Get Expert Advice
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={0.45}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-3 gap-3 md:gap-5 w-full max-w-2xl"
          data-ocid="hero.stats_row"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-xl px-3 py-4 md:py-5"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(12px)",
              }}
              data-ocid={`hero.stat.${s.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              <span
                className="font-display font-bold leading-none mb-1"
                style={{
                  fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                  color: "#F5D98A",
                }}
              >
                {s.value}
              </span>
              <span
                className="text-[11px] md:text-xs font-body font-medium text-center leading-tight"
                style={{ color: "rgba(220,232,255,0.80)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-1.5"
          style={{ opacity: 0.65 }}
          aria-hidden="true"
        >
          <span
            className="text-[11px] uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative scroll indicator */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 3v12M4 10l5 5 5-5"
                stroke="#E0A52B"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
