import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Link } from "@tanstack/react-router";
import {
  Bath,
  BedDouble,
  Check,
  ChevronRight,
  GitCompareArrows,
  MapPin,
  Ruler,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { properties } from "../data/properties";
import { useComparisonStore } from "../store/comparisonStore";
import {
  BUDGET_PRESETS,
  LOCATIONS,
  PROPERTY_TYPES,
  useFilterStore,
} from "../store/filterStore";

// ─── Tag badge colours ───────────────────────────────────────────────────────
const TAG_STYLES: Record<string, string> = {
  Premium: "bg-accent text-accent-foreground",
  Ready: "bg-primary text-primary-foreground",
  Investment: "bg-secondary text-secondary-foreground border border-border",
};

// ─── Budget formatter ────────────────────────────────────────────────────────
function formatBudget(val: number): string {
  if (val >= 10000000)
    return `₹${(val / 10000000).toFixed(1).replace(/\.0$/, "")} Cr`;
  if (val >= 100000) return `₹${(val / 100000).toFixed(0)} L`;
  return `₹${val.toLocaleString("en-IN")}`;
}

// ─── FilterBar (desktop) ─────────────────────────────────────────────────────
function FilterBar() {
  const {
    budgetMin,
    budgetMax,
    location,
    propertyType,
    setBudgetMin,
    setBudgetMax,
    setLocation,
    setPropertyType,
    resetFilters,
  } = useFilterStore();
  const isFiltered =
    location !== "all" ||
    propertyType !== "all" ||
    budgetMin > 0 ||
    budgetMax < 30000000;

  return (
    <div className="bg-card rounded-2xl border border-border shadow-card p-5 mb-8 space-y-5">
      {/* Budget Row */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-foreground">
            Budget Range
          </span>
          <span className="text-sm font-medium text-primary">
            {formatBudget(budgetMin)} – {formatBudget(budgetMax)}
          </span>
        </div>
        <Slider
          min={0}
          max={30000000}
          step={500000}
          value={[budgetMin, budgetMax]}
          onValueChange={([min, max]) => {
            setBudgetMin(min);
            setBudgetMax(max);
          }}
          className="mb-2"
          data-ocid="properties.budget_slider"
        />
        <div className="flex justify-between mt-2">
          {BUDGET_PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                setBudgetMin(preset.min);
                setBudgetMax(preset.max);
              }}
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              data-ocid={`properties.budget_preset.${preset.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Location + Type Row */}
      <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-border/60">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Location
        </span>
        {LOCATIONS.map((loc) => (
          <button
            key={loc.value}
            type="button"
            onClick={() => setLocation(loc.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-smooth ${
              location === loc.value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
            }`}
            data-ocid={`properties.location_filter.${loc.value}`}
          >
            {loc.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-border/60">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Type
        </span>
        {PROPERTY_TYPES.map((type) => (
          <button
            key={type.value}
            type="button"
            onClick={() => setPropertyType(type.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-smooth ${
              propertyType === type.value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
            }`}
            data-ocid={`properties.type_filter.${type.value}`}
          >
            {type.label}
          </button>
        ))}

        {isFiltered && (
          <button
            type="button"
            onClick={resetFilters}
            className="ml-auto flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors duration-200"
            data-ocid="properties.clear_filters_button"
          >
            <X className="w-3.5 h-3.5" /> Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Mobile filter sheet ─────────────────────────────────────────────────────
function MobileFilterSheet() {
  const {
    budgetMin,
    budgetMax,
    location,
    propertyType,
    setBudgetMin,
    setBudgetMax,
    setLocation,
    setPropertyType,
    resetFilters,
  } = useFilterStore();
  const isFiltered =
    location !== "all" ||
    propertyType !== "all" ||
    budgetMin > 0 ||
    budgetMax < 30000000;
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-primary/40 text-primary"
          data-ocid="properties.filter_sheet_button"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {isFiltered && <span className="w-2 h-2 rounded-full bg-accent" />}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="rounded-t-2xl max-h-[85vh] overflow-y-auto"
        data-ocid="properties.filter_sheet"
      >
        <SheetHeader className="mb-5">
          <SheetTitle className="font-display text-primary">
            Filter Properties
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6 pb-6">
          {/* Budget */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground">
                Budget Range
              </span>
              <span className="text-sm font-medium text-primary">
                {formatBudget(budgetMin)} – {formatBudget(budgetMax)}
              </span>
            </div>
            <Slider
              min={0}
              max={30000000}
              step={500000}
              value={[budgetMin, budgetMax]}
              onValueChange={([min, max]) => {
                setBudgetMin(min);
                setBudgetMax(max);
              }}
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {BUDGET_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setBudgetMin(preset.min);
                    setBudgetMax(preset.max);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-smooth ${
                    budgetMin === preset.min && budgetMax === preset.max
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Location
            </p>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.value}
                  type="button"
                  onClick={() => setLocation(loc.value)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-smooth ${
                    location === loc.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Property Type
            </p>
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setPropertyType(type.value)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-smooth ${
                    propertyType === type.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {isFiltered && (
              <Button
                variant="outline"
                className="flex-1 border-accent text-accent"
                onClick={resetFilters}
                data-ocid="properties.mobile_clear_button"
              >
                Clear All
              </Button>
            )}
            <Button
              className="flex-1 bg-primary text-primary-foreground"
              onClick={() => setOpen(false)}
              data-ocid="properties.mobile_apply_button"
            >
              Show Results
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ─── Property Card ───────────────────────────────────────────────────────────
function PropertyCard({
  property,
  index,
}: { property: (typeof properties)[0]; index: number }) {
  const { selectedIds, addProperty, removeProperty } = useComparisonStore();
  const isCompared = selectedIds.includes(property.id);
  const canAdd = selectedIds.length < 3 || isCompared;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      layout
      className="group bg-card rounded-xl overflow-hidden border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth flex flex-col"
      data-ocid={`properties.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          {property.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-bold px-2 py-0.5 rounded-md shadow-sm ${TAG_STYLES[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Status badge for under construction */}
        {property.status === "Under Construction" && (
          <span className="absolute top-3 right-3 text-xs font-semibold bg-foreground/80 text-background px-2 py-0.5 rounded-md">
            UC
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xl font-display font-bold text-primary leading-tight">
          {property.priceDisplay}
        </p>
        <p
          className="text-sm font-semibold text-foreground mt-1 truncate"
          title={property.title}
        >
          {property.title}
        </p>
        <div className="flex items-center gap-1 mt-1.5 text-muted-foreground min-w-0">
          <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <span className="text-xs truncate">{property.location}</span>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mt-3 pt-3 border-t border-border/50 text-xs text-muted-foreground">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1 shrink-0">
              <BedDouble className="w-3.5 h-3.5" />
              {property.bedrooms} BHK
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1 shrink-0">
              <Bath className="w-3.5 h-3.5" />
              {property.bathrooms}
            </span>
          )}
          <span className="flex items-center gap-1 shrink-0">
            <Ruler className="w-3.5 h-3.5" />
            {property.area.toLocaleString()} sqft
          </span>
          <Badge
            variant="outline"
            className="text-xs ml-auto border-border/70 shrink-0"
          >
            {property.propertyType}
          </Badge>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Link
            to="/property/$id"
            params={{ id: property.id }}
            className="flex-1"
            data-ocid={`properties.view_button.${index + 1}`}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth group/btn"
            >
              View Details
              <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </Button>
          </Link>
          <button
            type="button"
            title={
              isCompared
                ? "Remove from Compare"
                : canAdd
                  ? "Add to Compare"
                  : "Max 3 properties"
            }
            disabled={!canAdd}
            onClick={() =>
              isCompared
                ? removeProperty(property.id)
                : addProperty(property.id)
            }
            className={`flex items-center justify-center w-8 h-8 rounded-lg border transition-smooth shrink-0 ${
              isCompared
                ? "bg-primary text-primary-foreground border-primary"
                : canAdd
                  ? "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                  : "border-border/40 text-border/60 cursor-not-allowed"
            }`}
            data-ocid={`properties.compare_button.${index + 1}`}
          >
            {isCompared ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <GitCompareArrows className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Comparison tray ─────────────────────────────────────────────────────────
function ComparisonTray() {
  const { selectedIds, clearComparison } = useComparisonStore();
  const count = selectedIds.length;
  if (count === 0) return null;

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-primary text-primary-foreground rounded-2xl shadow-elevated px-5 py-3 flex items-center gap-4"
      data-ocid="properties.comparison_tray"
    >
      <GitCompareArrows className="w-4 h-4 shrink-0" />
      <span className="text-sm font-medium whitespace-nowrap">
        {count} {count === 1 ? "property" : "properties"} selected
      </span>
      {count >= 2 && (
        <a href="#compare" data-ocid="properties.compare_link">
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs h-7"
          >
            Compare
          </Button>
        </a>
      )}
      <button
        type="button"
        onClick={clearComparison}
        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
        data-ocid="properties.comparison_tray.close_button"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

// ─── Section wrapper for scroll-triggered reveal ─────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Main export ─────────────────────────────────────────────────────────────
export function PropertyGrid() {
  const { budgetMin, budgetMax, location, propertyType } = useFilterStore();
  const { ref, inView } = useInView(0.05);

  const filtered = properties.filter((p) => {
    const locMatch = location === "all" || p.location.includes(location);
    const typeMatch = propertyType === "all" || p.propertyType === propertyType;
    const priceMatch = p.price >= budgetMin && p.price <= budgetMax;
    return locMatch && typeMatch && priceMatch;
  });

  return (
    <section
      id="properties"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-4 bg-secondary/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
            Property Listings
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            Featured Properties
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Explore our carefully curated selection of properties across
            Ahmedabad's most sought-after locations.
          </p>
        </motion.div>

        {/* Filter bar — desktop / mobile toggle */}
        <div className="hidden md:block">
          <FilterBar />
        </div>
        <div className="flex items-center justify-between md:hidden mb-5">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">
              {filtered.length}
            </span>{" "}
            of {properties.length} properties
          </p>
          <MobileFilterSheet />
        </div>

        {/* Result count (desktop) */}
        <div className="hidden md:flex items-center justify-between mb-5">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-primary">
              {filtered.length}
            </span>{" "}
            of {properties.length} properties
          </p>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-muted-foreground"
              data-ocid="properties.empty_state"
            >
              <div className="text-5xl mb-4">🏠</div>
              <p className="text-lg font-display font-semibold text-primary">
                No properties match your filters
              </p>
              <p className="text-sm mt-2">
                Try adjusting your budget, location, or property type.
              </p>
              <button
                type="button"
                onClick={useFilterStore.getState().resetFilters}
                className="mt-5 text-sm font-semibold text-accent hover:underline"
                data-ocid="properties.empty_state_reset_button"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA row */}
        {filtered.length > 0 && (
          <div className="mt-10 text-center">
            <a href="#lead-capture" data-ocid="properties.view_all_button">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
              >
                Get Expert Property Advice
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        )}
      </div>

      {/* Comparison floating tray */}
      <AnimatePresence>
        <ComparisonTray />
      </AnimatePresence>
    </section>
  );
}
