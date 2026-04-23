export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceDisplay: string;
  propertyType: "Flat" | "Villa" | "Plot";
  tags: Array<"Premium" | "Ready" | "Investment">;
  imageUrl: string;
  description: string;
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: "Available" | "Sold" | "Under Construction";
}

export interface LeadForm {
  formType: "get-deals" | "book-visit" | "talk-expert";
  name: string;
  phone: string;
  email: string;
  budget?: string;
  propertyType?: string;
  location?: string;
  visitDate?: string;
  query?: string;
  contactTime?: string;
}

export interface InvestmentZone {
  name: string;
  avgPrice: string;
  growth: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  propertyType: string;
  location: string;
}

export interface ComparisonState {
  selectedIds: string[];
  addProperty: (id: string) => void;
  removeProperty: (id: string) => void;
  clearComparison: () => void;
}

export interface FilterState {
  budgetMin: number;
  budgetMax: number;
  location: string;
  propertyType: string;
  setBudgetMin: (val: number) => void;
  setBudgetMax: (val: number) => void;
  setLocation: (val: string) => void;
  setPropertyType: (val: string) => void;
  resetFilters: () => void;
}
