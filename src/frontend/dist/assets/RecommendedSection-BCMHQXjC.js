import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, x as Link, s as MapPin, t as BedDouble, R as Ruler, B as Button, U as featuredProperties } from "./index-8S6VUuRh.js";
import { C as ChevronRight } from "./chevron-right-4-QcqRr5.js";
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
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const recommended = featuredProperties.slice(0, 4);
const TAG_STYLES = {
  Premium: "bg-accent text-accent-foreground",
  Ready: "bg-primary text-primary-foreground",
  Investment: "bg-foreground/80 text-background"
};
const HOT_LABELS = ["🔥 Hot", "Popular", "🔥 Hot", "Popular"];
function RecommendedSection() {
  const scrollRef = reactExports.useRef(null);
  const [activeDot, setActiveDot] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveDot(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.offsetWidth, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "recommended", className: "py-20 px-4 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center mb-10",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.55 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
            "Recommended For You"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight", children: "Handpicked This Week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed", children: "Properties matching popular searches — curated by our experts" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10", children: recommended.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.45, delay: i * 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/property/$id",
            params: { id: p.id },
            className: "group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth border border-border/50",
            "data-ocid": `recommended.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-40 overflow-hidden bg-secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.imageUrl,
                    alt: p.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-2 py-0.5 rounded-md bg-accent text-accent-foreground", children: HOT_LABELS[i] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: p.tags.slice(0, 1).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs font-semibold px-2 py-0.5 rounded-md ${TAG_STYLES[tag] ?? "bg-muted text-muted-foreground"}`,
                    children: tag
                  },
                  tag
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-primary leading-tight", children: p.priceDisplay }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground mt-0.5 truncate", children: p.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-accent flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs truncate", children: p.location })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-2 text-xs text-muted-foreground", children: [
                  p.bedrooms > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3 h-3" }),
                    p.bedrooms,
                    " BHK"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "w-3 h-3" }),
                    p.area.toLocaleString(),
                    " ft²"
                  ] })
                ] })
              ] })
            ]
          }
        )
      },
      p.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:hidden mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: scrollRef,
          className: "flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-hide",
          style: { scrollbarWidth: "none" },
          children: recommended.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/property/$id",
              params: { id: p.id },
              className: "group flex-shrink-0 w-[85vw] bg-card rounded-xl overflow-hidden shadow-card border border-border/50 snap-start",
              "data-ocid": `recommended.carousel.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden bg-secondary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: p.imageUrl,
                      alt: p.title,
                      className: "w-full h-full object-cover",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-2 py-0.5 rounded-md bg-accent text-accent-foreground", children: HOT_LABELS[i] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-primary", children: p.priceDisplay }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground mt-0.5 truncate", children: p.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground mt-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 text-accent flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs truncate", children: p.location })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-2 text-xs text-muted-foreground", children: [
                    p.bedrooms > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-3 h-3" }),
                      p.bedrooms,
                      " BHK"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "w-3 h-3" }),
                      p.area.toLocaleString(),
                      " ft²"
                    ] })
                  ] })
                ] })
              ]
            },
            p.id
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1.5 mt-3", children: recommended.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => scrollTo(i),
          "aria-label": `Go to slide ${i + 1}`,
          className: `h-1.5 rounded-full transition-all duration-200 ${activeDot === i ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30"}`,
          "data-ocid": `recommended.carousel_dot.${i + 1}`
        },
        `dot-${p.id}`
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "text-center",
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: 0.3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "border-primary text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth gap-2",
            onClick: () => {
              var _a;
              return (_a = document.getElementById("properties")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            "data-ocid": "recommended.view_all_button",
            children: [
              "View All Properties",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        )
      }
    )
  ] }) });
}
export {
  RecommendedSection
};
