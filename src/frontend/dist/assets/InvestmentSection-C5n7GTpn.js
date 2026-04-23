import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, s as MapPin, B as Button } from "./index-8S6VUuRh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const investmentZones = [
  {
    name: "Science City Corridor",
    avgPrice: "₹55–85 L",
    growth: "18% in 3 years",
    description: "Ahmedabad's fastest-growing knowledge district, anchored by pharma, IT, and life sciences. Driven by Zydus Corridor expansion and upcoming metro connectivity. Strong rental demand from young professionals.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
  },
  {
    name: "SG Highway",
    avgPrice: "₹65–1.2 Cr",
    growth: "22% in 3 years",
    description: "Ahmedabad's premium residential and commercial spine. Home to luxury malls, corporate parks, and top residential projects. Consistently high capital appreciation and excellent connectivity to the airport.",
    imageUrl: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=80"
  },
  {
    name: "Satellite",
    avgPrice: "₹70 L–2.5 Cr",
    growth: "15% in 3 years",
    description: "Ahmedabad's most established premium address. Known for top-tier schools, hospitals, and lifestyle infrastructure. Properties here hold value exceptionally well, attracting both end-users and HNI investors.",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80"
  },
  {
    name: "Bopal & South Bopal",
    avgPrice: "₹45–75 L",
    growth: "25% in 3 years",
    description: "The highest-growth micro-market in west Ahmedabad. SP Ring Road connectivity, new township projects, and affordable entry points make this Ahmedabad's best mid-segment investment story right now.",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&q=80"
  }
];
const TREND_WIDTHS = ["72%", "88%", "60%", "95%"];
function InvestmentSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "investment", className: "py-20 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center mb-12",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.55 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Investment Hotspots" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight", children: "Best Areas in Ahmedabad to Invest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed", children: "Data-driven insights on Ahmedabad's highest-growth investment zones" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: investmentZones.map((zone, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth",
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        "data-ocid": `investment.zone.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden bg-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: zone.imageUrl,
                alt: zone.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
              zone.growth
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-display font-bold text-white drop-shadow-sm", children: zone.name }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-accent flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground", children: [
                "Avg. ",
                zone.avgPrice
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3", children: zone.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Growth Trend" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent", children: zone.growth })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full bg-accent transition-all duration-700",
                  style: { width: TREND_WIDTHS[i] }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full border-primary text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth mt-1",
                "data-ocid": `investment.zone_explore_button.${i + 1}`,
                onClick: () => {
                  var _a;
                  return (_a = document.getElementById("properties")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                },
                children: "Explore Zone"
              }
            )
          ] })
        ]
      },
      zone.name
    )) })
  ] }) });
}
export {
  InvestmentSection
};
