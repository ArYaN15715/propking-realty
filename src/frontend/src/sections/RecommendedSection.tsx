import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BedDouble, ChevronRight, MapPin, Ruler, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { featuredProperties } from "../data/properties";

// Show 4 from featured
const recommended = featuredProperties.slice(0, 4);

const TAG_STYLES: Record<string, string> = {
  Premium: "bg-accent text-accent-foreground",
  Ready: "bg-primary text-primary-foreground",
  Investment: "bg-foreground/80 text-background",
};

// Hot badge labels — rotate through popular/hot
const HOT_LABELS = ["🔥 Hot", "Popular", "🔥 Hot", "Popular"];

export function RecommendedSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Track scroll position to update dot indicator on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveDot(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.offsetWidth, behavior: "smooth" });
  };

  return (
    <section id="recommended" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Recommended For You
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            Handpicked This Week
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            Properties matching popular searches — curated by our experts
          </p>
        </motion.div>

        {/* Desktop grid — hidden on mobile */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {recommended.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                to="/property/$id"
                params={{ id: p.id }}
                className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth border border-border/50"
                data-ocid={`recommended.item.${i + 1}`}
              >
                <div className="relative h-40 overflow-hidden bg-secondary">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hot badge */}
                  <div className="absolute top-2 left-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-accent text-accent-foreground">
                      {HOT_LABELS[i]}
                    </span>
                  </div>
                  {/* Primary tag */}
                  <div className="absolute top-2 right-2">
                    {p.tags.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-2 py-0.5 rounded-md ${TAG_STYLES[tag] ?? "bg-muted text-muted-foreground"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-lg font-display font-bold text-primary leading-tight">
                    {p.priceDisplay}
                  </p>
                  <p className="text-xs font-medium text-foreground mt-0.5 truncate">
                    {p.title}
                  </p>
                  <div className="flex items-center gap-1 text-muted-foreground mt-1.5">
                    <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-xs truncate">{p.location}</span>
                  </div>
                  <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                    {p.bedrooms > 0 && (
                      <span className="flex items-center gap-0.5">
                        <BedDouble className="w-3 h-3" />
                        {p.bedrooms} BHK
                      </span>
                    )}
                    <span className="flex items-center gap-0.5">
                      <Ruler className="w-3 h-3" />
                      {p.area.toLocaleString()} ft²
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel — visible only on small screens */}
        <div className="sm:hidden mb-6">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {recommended.map((p, i) => (
              <Link
                key={p.id}
                to="/property/$id"
                params={{ id: p.id }}
                className="group flex-shrink-0 w-[85vw] bg-card rounded-xl overflow-hidden shadow-card border border-border/50 snap-start"
                data-ocid={`recommended.carousel.item.${i + 1}`}
              >
                <div className="relative h-44 overflow-hidden bg-secondary">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-accent text-accent-foreground">
                      {HOT_LABELS[i]}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-lg font-display font-bold text-primary">
                    {p.priceDisplay}
                  </p>
                  <p className="text-xs font-medium text-foreground mt-0.5 truncate">
                    {p.title}
                  </p>
                  <div className="flex items-center gap-1 text-muted-foreground mt-1.5">
                    <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-xs truncate">{p.location}</span>
                  </div>
                  <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                    {p.bedrooms > 0 && (
                      <span className="flex items-center gap-0.5">
                        <BedDouble className="w-3 h-3" />
                        {p.bedrooms} BHK
                      </span>
                    )}
                    <span className="flex items-center gap-0.5">
                      <Ruler className="w-3 h-3" />
                      {p.area.toLocaleString()} ft²
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-3">
            {recommended.map((p, i) => (
              <button
                key={`dot-${p.id}`}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  activeDot === i
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-muted-foreground/30"
                }`}
                data-ocid={`recommended.carousel_dot.${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth gap-2"
            onClick={() =>
              document
                .getElementById("properties")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-ocid="recommended.view_all_button"
          >
            View All Properties
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
