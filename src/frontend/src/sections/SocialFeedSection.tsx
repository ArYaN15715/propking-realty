import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Heart,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { properties } from "../data/properties";

const POSTS = [
  {
    id: 1,
    imageUrl: properties[0].imageUrl,
    caption:
      "🏠 3BHK Premium Flat near SG Highway | ₹1.2Cr | DM for details #Ahmedabad #RealEstate",
    likes: 247,
    comments: 18,
  },
  {
    id: 2,
    imageUrl: properties[2].imageUrl,
    caption:
      "Investing in Science City? Here's why it's Ahmedabad's hottest zone right now. 📈 #Investment #PropKingRealty",
    likes: 189,
    comments: 24,
  },
  {
    id: 3,
    imageUrl: properties[5].imageUrl,
    caption: "Spacious 4BHK Villa | Private Pool | Bopal | Limited Units 🔑",
    likes: 312,
    comments: 31,
  },
];

function InstagramCard({
  post,
  index,
}: { post: (typeof POSTS)[0]; index: number }) {
  return (
    <div
      className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/60 hover:shadow-elevated transition-smooth hover:-translate-y-0.5 flex flex-col"
      data-ocid={`social.post.${index + 1}`}
    >
      {/* Profile strip */}
      <div className="flex items-center gap-2.5 px-3 py-2.5 border-b border-border/40">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <Building2 className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-foreground truncate">
            thepropkingrealty
          </p>
          <p className="text-[10px] text-muted-foreground">
            Ahmedabad, Gujarat
          </p>
        </div>
        <Badge
          variant="outline"
          className="text-[10px] px-1.5 py-0 border-accent/50 text-accent bg-accent/5 flex-shrink-0"
        >
          Verified
        </Badge>
      </div>

      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={post.imageUrl}
          alt={`Instagram post ${index + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Engagement row */}
      <div className="flex items-center gap-4 px-3 py-2 border-b border-border/30">
        <button
          type="button"
          className="flex items-center gap-1 text-muted-foreground hover:text-red-500 transition-colors group"
          aria-label="Like"
          data-ocid={`social.like_button.${index + 1}`}
        >
          <Heart className="w-4 h-4 group-hover:fill-red-500 transition-all" />
          <span className="text-xs font-medium">{post.likes}</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Comments"
          data-ocid={`social.comment_button.${index + 1}`}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs font-medium">{post.comments}</span>
        </button>
      </div>

      {/* Caption */}
      <div className="px-3 py-2.5 flex-1 flex flex-col gap-3">
        <p className="text-xs text-foreground/80 leading-relaxed line-clamp-3">
          {post.caption}
        </p>

        {/* Instagram CTA */}
        <a
          href="https://instagram.com/thepropkingrealty"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold self-start px-3 py-1.5 rounded-full border transition-smooth hover:scale-105"
          style={{
            borderImage:
              "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) 1",
            borderImageSlice: 1,
          }}
          data-ocid={`social.instagram_link.${index + 1}`}
        >
          <Instagram className="w-3 h-3" />
          <span
            style={{
              background:
                "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            View on Instagram
          </span>
        </a>
      </div>
    </div>
  );
}

export function SocialFeedSection() {
  return (
    <section id="social" className="py-16 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            Social Feed
          </p>
          <h2 className="text-3xl font-display font-bold text-primary mb-2">
            Follow Our Properties
          </h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            See our latest listings and updates on social media
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://instagram.com/thepropkingrealty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              data-ocid="social.instagram_profile_link"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              @thepropkingrealty
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              data-ocid="social.linkedin_profile_link"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              PropKing Realty
            </a>
          </div>
        </div>

        {/* Cards grid: 3-col desktop, horizontal scroll mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {POSTS.map((post, i) => (
            <div
              key={post.id}
              className="w-72 md:w-auto flex-shrink-0 md:flex-shrink snap-start"
            >
              <InstagramCard post={post} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
