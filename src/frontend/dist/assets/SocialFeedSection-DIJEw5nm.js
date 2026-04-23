import { c as createLucideIcon, j as jsxRuntimeExports, p as properties, Y as Building2, w as Badge, Z as MessageCircle } from "./index-8S6VUuRh.js";
import { I as Instagram, L as Linkedin } from "./linkedin-x8HqKeYB.js";
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
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const POSTS = [
  {
    id: 1,
    imageUrl: properties[0].imageUrl,
    caption: "🏠 3BHK Premium Flat near SG Highway | ₹1.2Cr | DM for details #Ahmedabad #RealEstate",
    likes: 247,
    comments: 18
  },
  {
    id: 2,
    imageUrl: properties[2].imageUrl,
    caption: "Investing in Science City? Here's why it's Ahmedabad's hottest zone right now. 📈 #Investment #PropKingRealty",
    likes: 189,
    comments: 24
  },
  {
    id: 3,
    imageUrl: properties[5].imageUrl,
    caption: "Spacious 4BHK Villa | Private Pool | Bopal | Limited Units 🔑",
    likes: 312,
    comments: 31
  }
];
function InstagramCard({
  post,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-2xl overflow-hidden shadow-card border border-border/60 hover:shadow-elevated transition-smooth hover:-translate-y-0.5 flex flex-col",
      "data-ocid": `social.post.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 px-3 py-2.5 border-b border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: "thepropkingrealty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Ahmedabad, Gujarat" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "text-[10px] px-1.5 py-0 border-accent/50 text-accent bg-accent/5 flex-shrink-0",
              children: "Verified"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: post.imageUrl,
            alt: `Instagram post ${index + 1}`,
            className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500",
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 px-3 py-2 border-b border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center gap-1 text-muted-foreground hover:text-red-500 transition-colors group",
              "aria-label": "Like",
              "data-ocid": `social.like_button.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 group-hover:fill-red-500 transition-all" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: post.likes })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors",
              "aria-label": "Comments",
              "data-ocid": `social.comment_button.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: post.comments })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2.5 flex-1 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80 leading-relaxed line-clamp-3", children: post.caption }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://instagram.com/thepropkingrealty",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1.5 text-[11px] font-semibold self-start px-3 py-1.5 rounded-full border transition-smooth hover:scale-105",
              style: {
                borderImage: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) 1",
                borderImageSlice: 1
              },
              "data-ocid": `social.instagram_link.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    },
                    children: "View on Instagram"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function SocialFeedSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "social", className: "py-16 px-4 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent mb-2", children: "Social Feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-primary mb-2", children: "Follow Our Properties" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm mx-auto", children: "See our latest listings and updates on social media" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-5 mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://instagram.com/thepropkingrealty",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors",
            "data-ocid": "social.instagram_profile_link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4 text-pink-500" }),
              "@thepropkingrealty"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://linkedin.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors",
            "data-ocid": "social.linkedin_profile_link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4 text-blue-600" }),
              "PropKing Realty"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none", children: POSTS.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-72 md:w-auto flex-shrink-0 md:flex-shrink snap-start",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramCard, { post, index: i })
      },
      post.id
    )) })
  ] }) });
}
export {
  SocialFeedSection
};
