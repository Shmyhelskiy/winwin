import { create } from 'zustand'

interface FilterStore {
	selectedFilters: string[]
	setFilters: (filters: string[]) => void
	clearFilters: () => void
}

export const useFilterStore = create<FilterStore>(set => ({
	selectedFilters: [],
	setFilters: filters => set({ selectedFilters: filters }),
	clearFilters: () => set({ selectedFilters: [] })
}))
