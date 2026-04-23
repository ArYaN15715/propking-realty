import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "@tanstack/react-router";
import { Building2, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { MobileBottomBar } from "./MobileBottomBar";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#lead-capture" },
];

const WA_LINK =
  "https://wa.me/917906556009?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20consultation";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 group"
      data-ocid="nav.logo_link"
    >
      <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center shadow-sm">
        <Building2 className="w-4 h-4 text-primary-foreground" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xs font-body font-semibold text-muted-foreground tracking-widest uppercase">
          The
        </span>
        <span className="text-base font-display font-bold text-primary tracking-tight">
          PROP<span className="text-accent">KING</span> REALTY
        </span>
      </div>
    </Link>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    onClick?.();
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => {
            document
              .querySelector(href)
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        });
      }
    }
  };

  return (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
          data-ocid={`nav.${link.label.toLowerCase()}_link`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLinks />
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.whatsapp_button"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-accent/40 text-accent hover:bg-accent/10 hover:text-accent transition-smooth"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
              <Button
                size="sm"
                className="button-primary gap-2 hover:bg-accent hover:text-accent-foreground transition-smooth"
                onClick={() =>
                  document
                    .querySelector("#lead-capture")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="nav.expert_cta_button"
              >
                Get Expert Advice
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  data-ocid="nav.mobile_menu_button"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-card flex flex-col gap-0 pt-6"
                data-ocid="nav.mobile_sheet"
              >
                <div className="flex items-center justify-between pb-6 border-b border-border px-6">
                  <Logo />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    data-ocid="nav.mobile_close_button"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-1 px-4 pt-4">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        setTimeout(() => {
                          document
                            .querySelector(link.href)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 200);
                      }}
                      className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors duration-200"
                      data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t border-border flex flex-col gap-2">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-accent/40 text-accent hover:bg-accent/10"
                      data-ocid="nav.mobile_whatsapp_button"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+917906556009">
                    <Button
                      className="w-full button-primary gap-2"
                      data-ocid="nav.mobile_call_button"
                    >
                      <Phone className="w-4 h-4" /> Call Us
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground" id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="font-display font-bold text-lg text-primary-foreground">
                  PROP<span className="text-accent">KING</span> REALTY
                </span>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Ahmedabad's trusted real estate advisor for residential and
                investment properties.
              </p>
              <div className="flex gap-3 mt-2">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors"
                  data-ocid="footer.whatsapp_link"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
                <a
                  href="tel:+917906556009"
                  className="flex items-center gap-1.5 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  data-ocid="footer.phone_link"
                >
                  <Phone className="w-3.5 h-3.5" /> +91 79065 56009
                </a>
              </div>
            </div>

            {/* Nav */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-3">
                Quick Links
              </p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    data-ocid={`footer.${link.label.toLowerCase()}_link`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-3">
                We Serve
              </p>
              <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
                {[
                  "SG Highway",
                  "Science City",
                  "Satellite",
                  "Bopal",
                  "Prahlad Nagar",
                  "Thaltej",
                ].map((loc) => (
                  <span key={loc}>{loc}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
            <span>
              © {new Date().getFullYear()} The PropKing Realty, Ahmedabad,
              Gujarat.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <WhatsAppButton />

      {/* Mobile Bottom Bar */}
      <MobileBottomBar />
    </div>
  );
}
