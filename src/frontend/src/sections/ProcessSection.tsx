import { ClipboardList, Handshake, Key, MapPin, Search } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Understand Requirement",
    desc: "We start with a detailed consultation to understand your lifestyle goals, budget, timeline, and preferred locations — ensuring every recommendation is tailored to you.",
  },
  {
    step: "02",
    icon: Search,
    title: "Curated Property Options",
    desc: "Our experts shortlist 3–5 properties that genuinely match your criteria. No noise, no irrelevant listings — only the options worth your time.",
  },
  {
    step: "03",
    icon: MapPin,
    title: "Guided Site Visits",
    desc: "We accompany you on site visits, highlighting the right details — construction quality, locality growth, builder credibility, and neighbourhood infrastructure.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Deal Negotiation",
    desc: "We negotiate on your behalf with builders and sellers to secure the best possible price, payment terms, and inclusions — protecting your interests throughout.",
  },
  {
    step: "05",
    icon: Key,
    title: "Final Closure",
    desc: "End-to-end support for documentation, registration, and loan coordination. We stay with you until the keys are firmly in your hand.",
  },
];

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[number];
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;
  const isHighlighted = index === 2;

  return (
    <div className="relative flex items-stretch gap-0">
      {/* Timeline column */}
      <div className="flex flex-col items-center mr-5 flex-shrink-0">
        {/* Step dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm z-10 flex-shrink-0 shadow-md ${
            isHighlighted
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {step.step}
        </motion.div>
        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
            style={{ transformOrigin: "top" }}
            className="w-0.5 flex-1 bg-primary/20 my-1"
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ x: index % 2 === 0 ? -32 : 32, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        data-ocid={`process.step.${index + 1}`}
        className={`flex-1 mb-6 rounded-2xl p-5 border transition-smooth group cursor-default ${
          isHighlighted
            ? "bg-primary border-primary text-primary-foreground shadow-elevated"
            : "bg-card border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-0.5"
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              isHighlighted
                ? "bg-primary-foreground/15"
                : "bg-primary/8 group-hover:bg-primary/12"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${
                isHighlighted ? "text-accent" : "text-primary"
              }`}
            />
          </div>
          <div className="min-w-0">
            <h3
              className={`font-display font-semibold text-base mb-1.5 ${
                isHighlighted ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isHighlighted
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              }`}
            >
              {step.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DesktopTimeline() {
  return (
    <div className="hidden lg:block">
      {/* Horizontal step numbers row */}
      <div className="flex items-start justify-between relative mb-0">
        {/* Connecting line beneath dots */}
        <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-primary/20" />
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          const isHighlighted = index === 2;
          return (
            <motion.div
              key={step.step}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-ocid={`process.step.${index + 1}`}
              className="flex flex-col items-center w-1/5 px-3 group cursor-default"
            >
              {/* Dot */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm z-10 shadow-md mb-5 flex-shrink-0 ${
                  isHighlighted
                    ? "bg-accent text-accent-foreground ring-4 ring-accent/25"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {step.step}
              </div>
              {/* Card */}
              <div
                className={`w-full rounded-2xl p-4 border transition-smooth text-center ${
                  isHighlighted
                    ? "bg-primary border-primary shadow-elevated"
                    : "bg-card border-border/50 shadow-card group-hover:shadow-elevated group-hover:-translate-y-1"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    isHighlighted ? "bg-primary-foreground/15" : "bg-primary/8"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isHighlighted ? "text-accent" : "text-primary"
                    }`}
                  />
                </div>
                <h3
                  className={`font-display font-semibold text-sm mb-2 leading-snug ${
                    isHighlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isHighlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 24, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            How We Help You
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A simple, transparent process from search to closure
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <DesktopTimeline />

        {/* Mobile + tablet: vertical timeline */}
        <div className="lg:hidden max-w-xl mx-auto">
          {STEPS.map((step, index) => (
            <StepCard
              key={step.step}
              step={step}
              index={index}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
