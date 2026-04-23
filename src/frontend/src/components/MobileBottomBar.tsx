import { Building2, MessageCircle, Phone } from "lucide-react";

const WA_LINK =
  "https://wa.me/917906556009?text=Hi%20THE%20PROPKING%20REALTY%2C%20I%27m%20interested%20in%20properties%20in%20Ahmedabad.%20Please%20contact%20me.";

const BASE_ITEM =
  "flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-primary-foreground/70 hover:text-accent active:text-accent transition-colors duration-200";

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary border-t border-primary-foreground/10 flex"
      data-ocid="mobile_bar.container"
    >
      <a
        href="tel:+917906556009"
        className={BASE_ITEM}
        data-ocid="mobile_bar.call_button"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-semibold tracking-wide">Call</span>
      </a>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[#4ade80] hover:text-[#86efac] active:text-[#86efac] transition-colors duration-200"
        data-ocid="mobile_bar.whatsapp_button"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>

      <button
        type="button"
        onClick={() =>
          document
            .querySelector("#properties")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className={BASE_ITEM}
        data-ocid="mobile_bar.properties_button"
        aria-label="Browse properties"
      >
        <Building2 className="w-5 h-5" />
        <span className="text-[10px] font-semibold tracking-wide">
          Properties
        </span>
      </button>
    </div>
  );
}
