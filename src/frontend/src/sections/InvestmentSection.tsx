import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { investmentZones } from "../data/investmentZones";

// CSS-only decorative trend bar widths per zone
const TREND_WIDTHS = ["72%", "88%", "60%", "95%"];

export function InvestmentSection() {
  return (
    <section id="investment" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Investment Hotspots
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            Best Areas in Ahmedabad to Invest
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Data-driven insights on Ahmedabad's highest-growth investment zones
          </p>
        </motion.div>

        {/* Zone Cards — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {investmentZones.map((zone, i) => (
            <motion.div
              key={zone.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`investment.zone.${i + 1}`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-secondary">
                <img
                  src={zone.imageUrl}
                  alt={zone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                {/* Growth badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow">
                    <TrendingUp className="w-3 h-3" />
                    {zone.growth}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-lg font-display font-bold text-white drop-shadow-sm">
                    {zone.name}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col gap-4">
                {/* Price + location row */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-bold text-foreground">
                    Avg. {zone.avgPrice}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {zone.description}
                </p>

                {/* Decorative trend bar */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Growth Trend</span>
                    <span className="font-semibold text-accent">
                      {zone.growth}
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700"
                      style={{ width: TREND_WIDTHS[i] }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth mt-1"
                  data-ocid={`investment.zone_explore_button.${i + 1}`}
                  onClick={() =>
                    document
                      .getElementById("properties")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Zone
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
