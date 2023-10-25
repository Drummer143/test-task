import { create } from "zustand";

interface AppStoreState {
    query?: string;

    setQuery: (query?: string) => void
}

export const useAppStore = create<AppStoreState>((set) => ({
    setQuery: query => set({ query })
}))
