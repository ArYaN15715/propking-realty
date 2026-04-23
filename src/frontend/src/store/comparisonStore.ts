import { create } from "zustand";
import type { ComparisonState } from "../types";

export const useComparisonStore = create<ComparisonState>((set) => ({
  selectedIds: [],
  addProperty: (id: string) =>
    set((state) => {
      if (state.selectedIds.includes(id) || state.selectedIds.length >= 3)
        return state;
      return { selectedIds: [...state.selectedIds, id] };
    }),
  removeProperty: (id: string) =>
    set((state) => ({
      selectedIds: state.selectedIds.filter((sid) => sid !== id),
    })),
  clearComparison: () => set({ selectedIds: [] }),
}));
