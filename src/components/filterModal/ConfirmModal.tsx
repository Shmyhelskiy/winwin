/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next'

import { X } from 'lucide-react'

import { useConfirmModalStore } from '@/state/useConfirmModalStore'
import { useFilterModalStore } from '@/state/useFilterModalStore'
import { useFilterStore } from '@/state/useFilterStore'

type ConfirmModalType = {
	filters: string[]
	setCurrentFilters: (filters: string[]) => void
}

const ConfirmModal: React.FC<ConfirmModalType> = ({
	filters,
	setCurrentFilters
}) => {
	const { t } = useTranslation('filter')
	const { close: closeConfirmModal } = useConfirmModalStore()
	const { close: closeModalForm } = useFilterModalStore()
	const { setFilters: setSelectedFilters, selectedFilters } = useFilterStore()

	const handleUseOldFilters = () => {
		setSelectedFilters(selectedFilters)
		setCurrentFilters(selectedFilters)
		closeConfirmModal()
		closeModalForm()
	}

	const handleApplyNewFilters = () => {
		setSelectedFilters(filters)
		closeConfirmModal()
		closeModalForm()
	}

	return (
		<section
			className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-10 p-40"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<div className="bg-white rounded-2xl w-full px-8 pt-10 max-h-[90vh] overflow-y-auto flex flex-col gap-30 font-display">
				<article className="relative flex justify-center">
					<h2
						id="modal-title"
						className="text-[40px] font-medium leading-[100%]"
					>
						{t('confirmModal.title')}
					</h2>
					<button
						onClick={close}
						className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
						aria-label="Close filter modal"
					>
						<X
							size={24}
							className="text-black"
						/>
					</button>
				</article>

				<article className="flex justify-center gap-8 pb-8">
					<button
						id="modal-title"
						onClick={handleUseOldFilters}
						className="font-semibold leading-[100%] font-inter rounded-2xl px-28 py-7 text-center cursor-pointer border-2 border-gray-200 hover:bg-gray-200"
					>
						{t('confirmModal.useOld')}
					</button>

					<button
						id="modal-title"
						onClick={handleApplyNewFilters}
						className="font-semibold leading-[100%] font-inter bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-28 py-7 text-center cursor-pointer"
					>
						{t('confirmModal.applyNew')}
					</button>
				</article>
			</div>
		</section>
	)
}

export default ConfirmModal
