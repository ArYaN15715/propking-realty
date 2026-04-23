import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-8S6VUuRh.js";
import { u as useInView } from "./use-in-view-D4F0iS6K.js";
import { C as ChevronRight } from "./chevron-right-4-QcqRr5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
const testimonials = [
  {
    id: "t-001",
    name: "Rajesh Patel",
    quote: "PropKing made our 3 BHK search genuinely stress-free. They understood our requirements within the first call, curated only the most relevant options, and handled all the paperwork seamlessly. We got our keys within 6 weeks of first consultation — a level of efficiency we had not experienced before.",
    propertyType: "3 BHK Flat",
    location: "SG Highway"
  },
  {
    id: "t-002",
    name: "Priya Mehta",
    quote: "As a first-time buyer, the process felt overwhelming until PropKing stepped in. Their team walked us through every legal step, explained the builder credibility factors, and even negotiated ₹3 lakh off the listed price. We felt truly looked after, not sold to.",
    propertyType: "2 BHK Flat",
    location: "Science City"
  },
  {
    id: "t-003",
    name: "Amit Shah",
    quote: "I was looking for investment plots with clear titles near growth corridors. PropKing identified three options in Bopal and SG Highway that matched my criteria precisely. Their market insights on appreciation trends were data-backed and refreshingly honest.",
    propertyType: "Residential Plot",
    location: "Bopal"
  },
  {
    id: "t-004",
    name: "Sunita Verma",
    quote: "The PropKing team secured us a premium villa in Satellite that was not publicly listed. Their access to pre-launch inventory and builder relationships gave us an edge. The experience was professional from site visit to registration — absolutely recommend them.",
    propertyType: "4 BHK Villa",
    location: "Satellite"
  },
  {
    id: "t-005",
    name: "Kiran Joshi",
    quote: "We relocated from Mumbai and had just 3 weeks to finalize a home in Ahmedabad. PropKing organized 8 curated visits in two days and gave us clear comparisons of each property. We made a confident decision under time pressure — that is remarkable service.",
    propertyType: "3 BHK Flat",
    location: "Prahlad Nagar"
  },
  {
    id: "t-006",
    name: "Deepak Chauhan",
    quote: "I had dealt with multiple brokers before but PropKing felt different — they worked as advisors, not salespeople. They flagged risks in two properties I was excited about, which saved me from a poor investment. That kind of honesty builds lifelong trust.",
    propertyType: "Investment Property",
    location: "SG Highway"
  }
];
function Avatar({ name }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-primary", children: name[0] }) });
}
function PropertyPill({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/15 text-primary border border-accent/30", children: label });
}
function TestimonialCard({
  t,
  index,
  visible = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { y: 28, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: visible ? index * 0.1 : 0 },
      "data-ocid": `testimonials.item.${index + 1}`,
      className: "bg-card rounded-2xl p-6 shadow-card border border-border/50 flex flex-col gap-4 h-full relative overflow-hidden transition-smooth hover:shadow-elevated hover:-translate-y-0.5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute top-4 right-5 font-display text-7xl leading-none text-accent/25 select-none pointer-events-none",
            "aria-hidden": "true",
            children: '"'
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-sm text-foreground/75 leading-relaxed flex-1 italic relative z-10 pt-1", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-primary truncate", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyPill, { label: `${t.propertyType} · ${t.location}` }) })
          ] })
        ] })
      ]
    }
  );
}
function MobileCarousel() {
  const [current, setCurrent] = reactExports.useState(0);
  const total = testimonials.length;
  const intervalRef = reactExports.useRef(null);
  const goTo = reactExports.useCallback(
    (index) => {
      setCurrent((index + total) % total);
    },
    [total]
  );
  const startAuto = reactExports.useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5e3);
  }, [total]);
  const stopAuto = reactExports.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);
  reactExports.useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative",
      onMouseEnter: stopAuto,
      onMouseLeave: startAuto,
      onTouchStart: stopAuto,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { x: `-${current * 100}%` },
            transition: { type: "spring", stiffness: 280, damping: 30 },
            className: "flex",
            children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex-shrink-0 px-1 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { t, index: i, visible: false }) }, t.id))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => goTo(current - 1),
              "data-ocid": "testimonials.carousel_prev",
              className: "w-8 h-8 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth",
              "aria-label": "Previous testimonial",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => goTo(i),
              "data-ocid": `testimonials.dot.${i + 1}`,
              "aria-label": `Go to testimonial ${i + 1}`,
              className: `h-2 rounded-full transition-smooth ${i === current ? "w-5 bg-accent" : "w-2 bg-border hover:bg-primary/30"}`
            },
            t.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => goTo(current + 1),
              "data-ocid": "testimonials.carousel_next",
              className: "w-8 h-8 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth",
              "aria-label": "Next testimonial",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ]
    }
  );
}
function TestimonialsSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "py-20 px-4 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { y: 24, opacity: 0 },
        animate: isInView ? { y: 0, opacity: 1 } : {},
        transition: { duration: 0.6, ease: "easeOut" },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Client Stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-primary mb-3", children: "Trusted by Hundreds of Clients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-lg mx-auto", children: "Real stories from real property buyers across Ahmedabad" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { t, index: i }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCarousel, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.4 },
        className: "text-center mt-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "1,000+" }),
          " clients guided since 2018 across Ahmedabad's top residential corridors"
        ] })
      }
    )
  ] }) });
}
export {
  TestimonialsSection
};
