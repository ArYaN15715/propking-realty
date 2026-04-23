import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRightLeft,
  Bath,
  BedDouble,
  MapPin,
  Ruler,
  Star,
  Tag,
  X,
} from "lucide-react";
import { properties } from "../data/properties";
import { useComparisonStore } from "../store/comparisonStore";
import type { Property } from "../types";

function PricePerSqft(p: Property) {
  return p.area > 0 ? p.price / p.area : Number.POSITIVE_INFINITY;
}

function getBestValueId(selected: Property[]): string | null {
  if (selected.length < 2) return null;
  let best = selected[0];
  for (const p of selected) {
    if (PricePerSqft(p) < PricePerSqft(best)) best = p;
  }
  return best.id;
}

const TAG_COLORS: Record<string, string> = {
  Premium: "bg-accent text-accent-foreground border-accent/30",
  Ready: "bg-primary/10 text-primary border-primary/20",
  Investment: "bg-secondary text-foreground border-border",
};

export function ComparisonSection() {
  const { selectedIds, removeProperty, clearComparison } = useComparisonStore();
  const selected = properties.filter((p) => selectedIds.includes(p.id));
  const bestValueId = getBestValueId(selected);

  return (
    <section id="compare" className="py-16 px-4 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 flex-wrap gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-1">
              <ArrowRightLeft className="w-3.5 h-3.5" /> Compare
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
              Compare Properties
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Select up to 3 properties to compare side-by-side
            </p>
          </div>
          {selected.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearComparison}
              className="gap-1.5 text-accent hover:text-accent/80 hover:bg-accent/10 font-semibold"
              data-ocid="compare.clear_button"
            >
              <X className="w-3.5 h-3.5" /> Clear All
            </Button>
          )}
        </div>

        {/* Empty state */}
        {selected.length < 2 && (
          <div
            className="flex flex-col items-center justify-center py-16 text-center gap-4"
            data-ocid="compare.empty_state"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
              <ArrowRightLeft className="w-7 h-7 text-primary/40" />
            </div>
            <div>
              <p className="font-display font-semibold text-lg text-foreground/60">
                No properties selected yet
              </p>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                Add properties to compare by clicking{" "}
                <span className="text-accent font-medium">
                  "Add to Compare"
                </span>{" "}
                on any property card
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 border-primary/30 text-primary hover:bg-primary/5"
              onClick={() =>
                document
                  .querySelector("#properties")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="compare.browse_button"
            >
              Browse Properties
            </Button>
          </div>
        )}

        {/* Comparison table */}
        {selected.length >= 2 && (
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[540px] text-sm border-separate border-spacing-y-0">
              {/* Column headers with property cards */}
              <thead>
                <tr>
                  <th className="w-28 md:w-36 text-left p-3 pb-4 align-bottom">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Feature
                    </span>
                  </th>
                  {selected.map((p, idx) => {
                    const isBest = p.id === bestValueId;
                    return (
                      <th
                        key={p.id}
                        className="p-2 pb-0 align-top"
                        data-ocid={`compare.property_column.${idx + 1}`}
                      >
                        <div
                          className={`rounded-xl overflow-hidden border transition-smooth ${
                            isBest
                              ? "border-accent shadow-elevated"
                              : "border-border shadow-card"
                          } bg-card`}
                        >
                          {isBest && (
                            <div className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest text-center py-1 flex items-center justify-center gap-1">
                              <Star className="w-3 h-3 fill-current" /> Best
                              Value
                            </div>
                          )}
                          <div className="relative">
                            <img
                              src={p.imageUrl}
                              alt={p.title}
                              className="w-full h-28 object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeProperty(p.id)}
                              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-foreground/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-destructive transition-colors"
                              aria-label={`Remove ${p.title}`}
                              data-ocid={`compare.remove_button.${idx + 1}`}
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="p-3">
                            <p className="font-display font-semibold text-primary text-sm leading-snug line-clamp-2">
                              {p.title}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                              <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                              <span className="truncate">{p.location}</span>
                            </div>
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {/* Price */}
                <tr className="group">
                  <td className="p-3 text-muted-foreground font-medium bg-secondary/30 rounded-l-lg">
                    Price
                  </td>
                  {selected.map((p) => (
                    <td
                      key={p.id}
                      className={`p-3 font-bold text-base rounded-r-lg ${
                        p.id === bestValueId
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/30 text-foreground"
                      }`}
                    >
                      {p.priceDisplay}
                    </td>
                  ))}
                </tr>

                {/* Location */}
                <tr>
                  <td className="p-3 text-muted-foreground font-medium">
                    Location
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-3 text-foreground">
                      {p.location}
                    </td>
                  ))}
                </tr>

                {/* Type */}
                <tr className="bg-secondary/20">
                  <td className="p-3 text-muted-foreground font-medium rounded-l-lg">
                    Type
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-3 text-foreground rounded-r-lg">
                      {p.propertyType}
                    </td>
                  ))}
                </tr>

                {/* Bedrooms */}
                <tr>
                  <td className="p-3 text-muted-foreground font-medium">
                    Bedrooms
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-3">
                      {p.bedrooms > 0 ? (
                        <span className="flex items-center gap-1.5 text-foreground">
                          <BedDouble className="w-3.5 h-3.5 text-primary" />
                          {p.bedrooms} BHK
                        </span>
                      ) : (
                        <span className="text-muted-foreground">N/A</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Bathrooms */}
                <tr className="bg-secondary/20">
                  <td className="p-3 text-muted-foreground font-medium rounded-l-lg">
                    Bathrooms
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-3 rounded-r-lg">
                      {p.bathrooms > 0 ? (
                        <span className="flex items-center gap-1.5 text-foreground">
                          <Bath className="w-3.5 h-3.5 text-primary" />
                          {p.bathrooms}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">N/A</span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Area */}
                <tr>
                  <td className="p-3 text-muted-foreground font-medium">
                    Area
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-3">
                      <span className="flex items-center gap-1.5 text-foreground">
                        <Ruler className="w-3.5 h-3.5 text-primary" />
                        {p.area.toLocaleString()} sqft
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Price/sqft */}
                <tr className="bg-secondary/20">
                  <td className="p-3 text-muted-foreground font-medium rounded-l-lg">
                    ₹/sqft
                  </td>
                  {selected.map((p) => (
                    <td
                      key={p.id}
                      className={`p-3 font-semibold rounded-r-lg ${
                        p.id === bestValueId ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {p.area > 0
                        ? `₹${Math.round(p.price / p.area).toLocaleString()}`
                        : "—"}
                    </td>
                  ))}
                </tr>

                {/* Tags */}
                <tr>
                  <td className="p-3 text-muted-foreground font-medium">
                    Tags
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded border ${TAG_COLORS[tag] ?? "bg-muted text-foreground border-border"}`}
                          >
                            <Tag className="w-2.5 h-2.5" /> {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Status */}
                <tr className="bg-secondary/20">
                  <td className="p-3 text-muted-foreground font-medium rounded-l-lg">
                    Status
                  </td>
                  {selected.map((p) => (
                    <td key={p.id} className="p-3 rounded-r-lg">
                      <Badge
                        variant="outline"
                        className={
                          p.status === "Available"
                            ? "border-primary/30 text-primary bg-primary/10"
                            : p.status === "Under Construction"
                              ? "border-accent/40 text-accent bg-accent/10"
                              : "border-muted-foreground/30 text-muted-foreground"
                        }
                      >
                        {p.status}
                      </Badge>
                    </td>
                  ))}
                </tr>

                {/* CTA row */}
                <tr>
                  <td className="p-3" />
                  {selected.map((p, idx) => (
                    <td key={p.id} className="p-3 pt-4">
                      <Link
                        to="/property/$id"
                        params={{ id: p.id }}
                        data-ocid={`compare.view_button.${idx + 1}`}
                      >
                        <Button
                          size="sm"
                          className={`w-full transition-smooth ${
                            p.id === bestValueId
                              ? "bg-accent text-accent-foreground hover:bg-accent/90"
                              : "button-primary hover:bg-accent hover:text-accent-foreground"
                          }`}
                        >
                          View Details
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
