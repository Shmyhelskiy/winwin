import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { X } from 'lucide-react'

import filterData from '@/shared/temp/filterData.json'
import { useConfirmModalStore } from '@/state/useConfirmModalStore'
import { useFilterModalStore } from '@/state/useFilterModalStore'
import { useFilterStore } from '@/state/useFilterStore'

import ConfirmModal from './ConfirmModal'
import FilterSection from './FilterSection'

const FilterModalForm = () => {
	const { t } = useTranslation('filter')
	const { isOpen: isOpenModalFrom, close } = useFilterModalStore()
	const { isOpen: isOpenConfirmFrom, open: openConfirm } =
		useConfirmModalStore()
	const { selectedFilters } = useFilterStore()

	const [filters, setFilters] = useState<string[]>(selectedFilters)
	const data = filterData.filterItems

	if (!isOpenModalFrom) {
		return null
	}

	const handleApply = () => {
		openConfirm()
	}

	const handleToggleFilter = (id: string) => {
		setFilters(prev =>
			prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
		)
	}

	const handleCrearFilters = () => {
		setFilters([])
	}

	return (
		<section
			className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-10 p-20"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<div className="bg-white rounded-2xl w-full px-8 pt-10 max-h-[90vh] overflow-y-auto flex flex-col gap-8 font-display">
				<article className="relative flex justify-center border-b-2 border-gray-200 pb-6">
					<h2
						id="modal-title"
						className="text-[40px] font-medium leading-[100%]"
					>
						{t('filterModalForm.title')}
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

				{data.map(item => {
					return (
						<FilterSection
							name={item.name}
							options={item.options}
							key={item.id}
							onToggle={handleToggleFilter}
							selectedFilters={filters}
						/>
					)
				})}

				<article className="relative flex justify-center border-b-2 border-gray-200 pb-6">
					<button
						id="modal-title"
						onClick={handleApply}
						className="font-semibold leading-[100%] font-inter bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-16 py-7 text-center cursor-pointer"
					>
						{t('filterModalForm.apply')}
					</button>
					<button
						onClick={handleCrearFilters}
						className="absolute top-2 right-2 font-medium text-[16px] leading-[100%] font-inter underline decoration-solid decoration-current cursor-pointer text-pri text-center text-[#078691]"
						aria-label="Clear all parameters"
					>
						{t('filterModalForm.clear')}
					</button>
				</article>
			</div>

			{isOpenConfirmFrom && (
				<ConfirmModal
					filters={filters}
					setCurrentFilters={setFilters}
				/>
			)}
		</section>
	)
}

export default FilterModalForm
