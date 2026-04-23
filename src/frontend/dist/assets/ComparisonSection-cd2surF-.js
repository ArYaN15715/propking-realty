import { c as createLucideIcon, p as properties, j as jsxRuntimeExports, B as Button, X, s as MapPin, t as BedDouble, v as Bath, R as Ruler, V as Tag, w as Badge, x as Link } from "./index-8S6VUuRh.js";
import { u as useComparisonStore } from "./comparisonStore-CSgIDE5q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
];
const ArrowRightLeft = createLucideIcon("arrow-right-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function PricePerSqft(p) {
  return p.area > 0 ? p.price / p.area : Number.POSITIVE_INFINITY;
}
function getBestValueId(selected) {
  if (selected.length < 2) return null;
  let best = selected[0];
  for (const p of selected) {
    if (PricePerSqft(p) < PricePerSqft(best)) best = p;
  }
  return best.id;
}
const TAG_COLORS = {
  Premium: "bg-accent text-accent-foreground border-accent/30",
  Ready: "bg-primary/10 text-primary border-primary/20",
  Investment: "bg-secondary text-foreground border-border"
};
function ComparisonSection() {
  const { selectedIds, removeProperty, clearComparison } = useComparisonStore();
  const selected = properties.filter((p) => selectedIds.includes(p.id));
  const bestValueId = getBestValueId(selected);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "compare", className: "py-16 px-4 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-8 flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "w-3.5 h-3.5" }),
          " Compare"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display font-bold text-primary", children: "Compare Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Select up to 3 properties to compare side-by-side" })
      ] }),
      selected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: clearComparison,
          className: "gap-1.5 text-accent hover:text-accent/80 hover:bg-accent/10 font-semibold",
          "data-ocid": "compare.clear_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
            " Clear All"
          ]
        }
      )
    ] }),
    selected.length < 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-center gap-4",
        "data-ocid": "compare.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { className: "w-7 h-7 text-primary/40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground/60", children: "No properties selected yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1 max-w-xs", children: [
              "Add properties to compare by clicking",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-medium", children: '"Add to Compare"' }),
              " ",
              "on any property card"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "mt-2 border-primary/30 text-primary hover:bg-primary/5",
              onClick: () => {
                var _a;
                return (_a = document.querySelector("#properties")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              "data-ocid": "compare.browse_button",
              children: "Browse Properties"
            }
          )
        ]
      }
    ),
    selected.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[540px] text-sm border-separate border-spacing-y-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-28 md:w-36 text-left p-3 pb-4 align-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Feature" }) }),
        selected.map((p, idx) => {
          const isBest = p.id === bestValueId;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "p-2 pb-0 align-top",
              "data-ocid": `compare.property_column.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `rounded-xl overflow-hidden border transition-smooth ${isBest ? "border-accent shadow-elevated" : "border-border shadow-card"} bg-card`,
                  children: [
                    isBest && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest text-center py-1 flex items-center justify-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-current" }),
                      " Best Value"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: p.imageUrl,
                          alt: p.title,
                          className: "w-full h-28 object-cover"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => removeProperty(p.id),
                          className: "absolute top-2 right-2 w-6 h-6 rounded-full bg-foreground/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-destructive transition-colors",
                          "aria-label": `Remove ${p.title}`,
                          "data-ocid": `compare.remove_button.${idx + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-primary text-sm leading-snug line-clamp-2", children: p.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-accent flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: p.location })
                      ] })
                    ] })
                  ]
                }
              )
            },
            p.id
          );
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium bg-secondary/30 rounded-l-lg", children: "Price" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: `p-3 font-bold text-base rounded-r-lg ${p.id === bestValueId ? "bg-primary text-primary-foreground" : "bg-secondary/30 text-foreground"}`,
              children: p.priceDisplay
            },
            p.id
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium", children: "Location" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-foreground", children: p.location }, p.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium rounded-l-lg", children: "Type" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-foreground rounded-r-lg", children: p.propertyType }, p.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium", children: "Bedrooms" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: p.bedrooms > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3.5 h-3.5 text-primary" }),
            p.bedrooms,
            " BHK"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "N/A" }) }, p.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium rounded-l-lg", children: "Bathrooms" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 rounded-r-lg", children: p.bathrooms > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "w-3.5 h-3.5 text-primary" }),
            p.bathrooms
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "N/A" }) }, p.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium", children: "Area" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "w-3.5 h-3.5 text-primary" }),
            p.area.toLocaleString(),
            " sqft"
          ] }) }, p.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium rounded-l-lg", children: "₹/sqft" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: `p-3 font-semibold rounded-r-lg ${p.id === bestValueId ? "text-accent" : "text-foreground"}`,
              children: p.area > 0 ? `₹${Math.round(p.price / p.area).toLocaleString()}` : "—"
            },
            p.id
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium", children: "Tags" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: p.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded border ${TAG_COLORS[tag] ?? "bg-muted text-foreground border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5" }),
                " ",
                tag
              ]
            },
            tag
          )) }) }, p.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground font-medium rounded-l-lg", children: "Status" }),
          selected.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 rounded-r-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: p.status === "Available" ? "border-primary/30 text-primary bg-primary/10" : p.status === "Under Construction" ? "border-accent/40 text-accent bg-accent/10" : "border-muted-foreground/30 text-muted-foreground",
              children: p.status
            }
          ) }, p.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3" }),
          selected.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/property/$id",
              params: { id: p.id },
              "data-ocid": `compare.view_button.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: `w-full transition-smooth ${p.id === bestValueId ? "bg-accent text-accent-foreground hover:bg-accent/90" : "button-primary hover:bg-accent hover:text-accent-foreground"}`,
                  children: "View Details"
                }
              )
            }
          ) }, p.id))
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  ComparisonSection
};
