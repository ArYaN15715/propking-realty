import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, s as MapPin } from "./index-8S6VUuRh.js";
import { u as useInView } from "./use-in-view-D4F0iS6K.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb"
    }
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }]
];
const Handshake = createLucideIcon("handshake", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
];
const Key = createLucideIcon("key", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Understand Requirement",
    desc: "We start with a detailed consultation to understand your lifestyle goals, budget, timeline, and preferred locations — ensuring every recommendation is tailored to you."
  },
  {
    step: "02",
    icon: Search,
    title: "Curated Property Options",
    desc: "Our experts shortlist 3–5 properties that genuinely match your criteria. No noise, no irrelevant listings — only the options worth your time."
  },
  {
    step: "03",
    icon: MapPin,
    title: "Guided Site Visits",
    desc: "We accompany you on site visits, highlighting the right details — construction quality, locality growth, builder credibility, and neighbourhood infrastructure."
  },
  {
    step: "04",
    icon: Handshake,
    title: "Deal Negotiation",
    desc: "We negotiate on your behalf with builders and sellers to secure the best possible price, payment terms, and inclusions — protecting your interests throughout."
  },
  {
    step: "05",
    icon: Key,
    title: "Final Closure",
    desc: "End-to-end support for documentation, registration, and loan coordination. We stay with you until the keys are firmly in your hand."
  }
];
function StepCard({
  step,
  index,
  isLast
}) {
  const Icon = step.icon;
  const isHighlighted = index === 2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-stretch gap-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mr-5 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: index * 0.12 },
          className: `w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm z-10 flex-shrink-0 shadow-md ${isHighlighted ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`,
          children: step.step
        }
      ),
      !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scaleY: 0 },
          whileInView: { scaleY: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.12 + 0.2 },
          style: { transformOrigin: "top" },
          className: "w-0.5 flex-1 bg-primary/20 my-1"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { x: index % 2 === 0 ? -32 : 32, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
        "data-ocid": `process.step.${index + 1}`,
        className: `flex-1 mb-6 rounded-2xl p-5 border transition-smooth group cursor-default ${isHighlighted ? "bg-primary border-primary text-primary-foreground shadow-elevated" : "bg-card border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-0.5"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isHighlighted ? "bg-primary-foreground/15" : "bg-primary/8 group-hover:bg-primary/12"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon,
                {
                  className: `w-5 h-5 ${isHighlighted ? "text-accent" : "text-primary"}`
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `font-display font-semibold text-base mb-1.5 ${isHighlighted ? "text-primary-foreground" : "text-foreground"}`,
                children: step.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-sm leading-relaxed ${isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`,
                children: step.desc
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function DesktopTimeline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between relative mb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-5 left-[10%] right-[10%] h-0.5 bg-primary/20" }),
    STEPS.map((step, index) => {
      const Icon = step.icon;
      const isHighlighted = index === 2;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.1 },
          "data-ocid": `process.step.${index + 1}`,
          className: "flex flex-col items-center w-1/5 px-3 group cursor-default",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm z-10 shadow-md mb-5 flex-shrink-0 ${isHighlighted ? "bg-accent text-accent-foreground ring-4 ring-accent/25" : "bg-primary text-primary-foreground"}`,
                children: step.step
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `w-full rounded-2xl p-4 border transition-smooth text-center ${isHighlighted ? "bg-primary border-primary shadow-elevated" : "bg-card border-border/50 shadow-card group-hover:shadow-elevated group-hover:-translate-y-1"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3 ${isHighlighted ? "bg-primary-foreground/15" : "bg-primary/8"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: `w-4 h-4 ${isHighlighted ? "text-accent" : "text-primary"}`
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: `font-display font-semibold text-sm mb-2 leading-snug ${isHighlighted ? "text-primary-foreground" : "text-foreground"}`,
                      children: step.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-xs leading-relaxed ${isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`,
                      children: step.desc
                    }
                  )
                ]
              }
            )
          ]
        },
        step.step
      );
    })
  ] }) });
}
function ProcessSection() {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "py-20 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        ref,
        initial: { y: 24, opacity: 0 },
        animate: isInView ? { y: 0, opacity: 1 } : {},
        transition: { duration: 0.6, ease: "easeOut" },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Our Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-primary mb-3", children: "How We Help You" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "A simple, transparent process from search to closure" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopTimeline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden max-w-xl mx-auto", children: STEPS.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      StepCard,
      {
        step,
        index,
        isLast: index === STEPS.length - 1
      },
      step.step
    )) })
  ] }) });
}
export {
  ProcessSection
};
