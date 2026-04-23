import { create } from "zustand";
import type { FilterState } from "../types";

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 30000000;

export const useFilterStore = create<FilterState>((set) => ({
  budgetMin: DEFAULT_MIN,
  budgetMax: DEFAULT_MAX,
  location: "all",
  propertyType: "all",
  setBudgetMin: (val) => set({ budgetMin: val }),
  setBudgetMax: (val) => set({ budgetMax: val }),
  setLocation: (val) => set({ location: val }),
  setPropertyType: (val) => set({ propertyType: val }),
  resetFilters: () =>
    set({
      budgetMin: DEFAULT_MIN,
      budgetMax: DEFAULT_MAX,
      location: "all",
      propertyType: "all",
    }),
}));

export const LOCATIONS = [
  { value: "all", label: "All Locations" },
  { value: "SG Highway", label: "SG Highway" },
  { value: "Science City", label: "Science City" },
  { value: "Satellite", label: "Satellite" },
  { value: "Bopal", label: "Bopal" },
  { value: "Prahlad Nagar", label: "Prahlad Nagar" },
];

export const PROPERTY_TYPES = [
  { value: "all", label: "All Types" },
  { value: "Flat", label: "Flat" },
  { value: "Villa", label: "Villa" },
  { value: "Plot", label: "Plot" },
];

export const BUDGET_PRESETS = [
  { label: "Under ₹50L", min: 0, max: 5000000 },
  { label: "₹50L–1Cr", min: 5000000, max: 10000000 },
  { label: "₹1Cr–2Cr", min: 10000000, max: 20000000 },
  { label: "Above ₹2Cr", min: 20000000, max: 30000000 },
];
