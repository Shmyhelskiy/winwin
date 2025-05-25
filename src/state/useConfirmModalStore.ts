import { create } from 'zustand'

interface ConfirmModalStore {
	isOpen: boolean
	open: () => void
	close: () => void
}

export const useConfirmModalStore = create<ConfirmModalStore>(set => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false })
}))
