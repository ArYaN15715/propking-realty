import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../data/testimonials";

function Avatar({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-sm">
      <span className="font-display font-bold text-sm text-primary">
        {name[0]}
      </span>
    </div>
  );
}

function PropertyPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/15 text-primary border border-accent/30">
      {label}
    </span>
  );
}

function TestimonialCard({
  t,
  index,
  visible = true,
}: {
  t: (typeof testimonials)[number];
  index: number;
  visible?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: visible ? index * 0.1 : 0 }}
      data-ocid={`testimonials.item.${index + 1}`}
      className="bg-card rounded-2xl p-6 shadow-card border border-border/50 flex flex-col gap-4 h-full relative overflow-hidden transition-smooth hover:shadow-elevated hover:-translate-y-0.5"
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-5 font-display text-7xl leading-none text-accent/25 select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote */}
      <blockquote className="text-sm text-foreground/75 leading-relaxed flex-1 italic relative z-10 pt-1">
        "{t.quote}"
      </blockquote>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Footer */}
      <div className="flex items-center gap-3">
        <Avatar name={t.name} />
        <div className="min-w-0 flex-1">
          <p className="font-display font-semibold text-sm text-primary truncate">
            {t.name}
          </p>
          <div className="mt-1">
            <PropertyPill label={`${t.propertyType} · ${t.location}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total],
  );

  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
  }, [total]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  return (
    <div
      className="relative"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      onTouchStart={stopAuto}
    >
      {/* Cards snap scroll */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          className="flex"
        >
          {testimonials.map((t, i) => (
            <div key={t.id} className="w-full flex-shrink-0 px-1 pb-2">
              <TestimonialCard t={t} index={i} visible={false} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          data-ocid="testimonials.carousel_prev"
          className="w-8 h-8 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => goTo(i)}
              data-ocid={`testimonials.dot.${i + 1}`}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-smooth ${
                i === current
                  ? "w-5 bg-accent"
                  : "w-2 bg-border hover:bg-primary/30"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          data-ocid="testimonials.carousel_next"
          className="w-8 h-8 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 24, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            Trusted by Hundreds of Clients
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real stories from real property buyers across Ahmedabad
          </p>
        </motion.div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <MobileCarousel />
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">1,000+</span> clients
            guided since 2018 across Ahmedabad's top residential corridors
          </p>
        </motion.div>
      </div>
    </section>
  );
}
