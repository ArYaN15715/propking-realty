import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Calendar,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Tag,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { properties } from "../data/properties";
import type { Property } from "../types";

const TAG_STYLES: Record<string, string> = {
  Premium: "bg-accent text-accent-foreground",
  Ready: "bg-primary text-primary-foreground",
  Investment: "bg-secondary text-secondary-foreground border border-border",
};

function usePropertySchema(property: Property | undefined) {
  useEffect(() => {
    if (!property) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: property.title,
      description: property.description,
      image: property.imageUrl,
      offers: {
        "@type": "Offer",
        price: property.price,
        priceCurrency: "INR",
        availability:
          property.status === "Available"
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        seller: {
          "@type": "RealEstateAgent",
          name: "THE PROPKING REALTY",
          url: "https://propkingrealty.com",
        },
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Location",
          value: `${property.location}, Ahmedabad, Gujarat, India`,
        },
        {
          "@type": "PropertyValue",
          name: "Property Type",
          value: property.propertyType,
        },
        ...(property.bedrooms > 0
          ? [
              {
                "@type": "PropertyValue",
                name: "Bedrooms",
                value: property.bedrooms,
              },
            ]
          : []),
        ...(property.bathrooms > 0
          ? [
              {
                "@type": "PropertyValue",
                name: "Bathrooms",
                value: property.bathrooms,
              },
            ]
          : []),
        {
          "@type": "PropertyValue",
          name: "Area",
          value: `${property.area} sq ft`,
        },
      ],
    };

    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(schema);
    el.setAttribute("data-schema", `property-${property.id}`);
    document.head.appendChild(el);

    // Update page title for the property
    const prevTitle = document.title;
    document.title = `${property.title} | ${property.location}, Ahmedabad | THE PROPKING REALTY`;

    return () => {
      el.remove();
      document.title = prevTitle;
    };
  }, [property]);
}

function BookVisitModal({
  property,
  open,
  onClose,
}: { property: Property; open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", visitDate: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    onClose();
    toast.success("Site visit booked! Our team will confirm within 2 hours.", {
      duration: 5000,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" data-ocid="book_visit.dialog">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-primary">
            Book a Site Visit
          </DialogTitle>
          <p className="text-sm text-muted-foreground">{property.title}</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="visit-name">Your Name</Label>
            <Input
              id="visit-name"
              required
              placeholder="Rajesh Patel"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              data-ocid="book_visit.name_input"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="visit-phone">Phone Number</Label>
            <Input
              id="visit-phone"
              required
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              data-ocid="book_visit.phone_input"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="visit-date">Preferred Visit Date</Label>
            <Input
              id="visit-date"
              type="date"
              required
              value={form.visitDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
              data-ocid="book_visit.date_input"
            />
          </div>
          <div className="flex gap-3 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              data-ocid="book_visit.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 button-primary hover:bg-accent hover:text-accent-foreground transition-smooth"
              data-ocid="book_visit.submit_button"
            >
              {submitting ? "Booking..." : "Confirm Visit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function PropertyDetailPage() {
  const { id } = useParams({ from: "/property/$id" });
  const [bookOpen, setBookOpen] = useState(false);
  const property = properties.find((p) => p.id === id);

  usePropertySchema(property);

  if (!property) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4"
        data-ocid="property_detail.error_state"
      >
        <p className="text-xl font-display text-foreground">
          Property not found
        </p>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div
      className="bg-background pb-24 md:pb-8"
      data-ocid="property_detail.page"
    >
      {/* Image Hero */}
      <div className="relative h-64 md:h-[460px] overflow-hidden bg-secondary">
        <img
          src={property.imageUrl}
          alt={`${property.title} — ${property.location}, Ahmedabad`}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {property.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TAG_STYLES[tag] || "bg-muted text-muted-foreground"}`}
                >
                  {tag}
                </span>
              ))}
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${property.status === "Available" ? "bg-green-500/90 text-white" : "bg-muted text-muted-foreground"}`}
              >
                {property.status}
              </span>
            </div>
            <h1 className="text-xl md:text-3xl font-display font-bold text-white leading-tight">
              {property.title}
            </h1>
          </div>
        </div>
        <Link
          to="/"
          className="absolute top-4 left-4 md:top-6 md:left-6 bg-card/90 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors shadow-sm"
          data-ocid="property_detail.back_link"
          aria-label="Back to listings"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Price + Location */}
            <div className="flex flex-col gap-1">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                {property.priceDisplay}
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">
                  {property.location}, Ahmedabad, Gujarat
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {property.bedrooms > 0 && (
                <div className="flex flex-col items-center gap-1 bg-secondary rounded-lg p-3 text-center">
                  <BedDouble className="w-5 h-5 text-primary" />
                  <span className="text-lg font-display font-bold text-foreground">
                    {property.bedrooms}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Bedrooms
                  </span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex flex-col items-center gap-1 bg-secondary rounded-lg p-3 text-center">
                  <Bath className="w-5 h-5 text-primary" />
                  <span className="text-lg font-display font-bold text-foreground">
                    {property.bathrooms}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Bathrooms
                  </span>
                </div>
              )}
              <div className="flex flex-col items-center gap-1 bg-secondary rounded-lg p-3 text-center">
                <Ruler className="w-5 h-5 text-primary" />
                <span className="text-lg font-display font-bold text-foreground">
                  {property.area.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground">Sq. Ft.</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-2">
                About This Property
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-accent" /> Amenities
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div
              className="sticky top-24 bg-card rounded-xl border border-border shadow-card p-5 flex flex-col gap-4"
              data-ocid="property_detail.cta_card"
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">
                  Starting From
                </p>
                <p className="text-2xl font-display font-bold text-primary">
                  {property.priceDisplay}
                </p>
                <Badge
                  variant="outline"
                  className="mt-1.5 text-xs border-accent/40 text-accent"
                >
                  {property.propertyType}
                </Badge>
              </div>
              <Button
                className="w-full button-primary hover:bg-accent hover:text-accent-foreground transition-smooth gap-2"
                onClick={() => setBookOpen(true)}
                data-ocid="property_detail.book_visit_button"
              >
                <Calendar className="w-4 h-4" /> Book Site Visit
              </Button>
              <a href="tel:+917906556009">
                <Button
                  variant="outline"
                  className="w-full gap-2 border-primary/30 text-primary hover:bg-primary/5 transition-smooth"
                  data-ocid="property_detail.call_button"
                >
                  <Phone className="w-4 h-4" /> Call Expert
                </Button>
              </a>
              <a
                href={`https://wa.me/917906556009?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(property.title)}%20at%20${encodeURIComponent(property.location)}%2C%20Ahmedabad.%20Please%20share%20more%20details.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full gap-2 border-accent/30 text-accent hover:bg-accent/5 transition-smooth"
                  data-ocid="property_detail.whatsapp_button"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
              </a>
              <p className="text-xs text-center text-muted-foreground">
                Free consultation · No commission for buyers
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <BookVisitModal
        property={property}
        open={bookOpen}
        onClose={() => setBookOpen(false)}
      />
    </div>
  );
}
