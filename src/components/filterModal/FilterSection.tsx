/* eslint-disable react/prop-types */
import { FilterChooseOption } from '@/shared/api/types/Filter'

import { FilterCheckbox } from './FilterCheckbox'

interface FilterSectionProps {
	name: string
	description?: string
	options: FilterChooseOption[]
	onToggle: (id: string) => void
	selectedFilters: string[]
}

const FilterSection: React.FC<FilterSectionProps> = ({
	name,
	description,
	options,
	onToggle,
	selectedFilters
}) => {
	return (
		<article className="w-full border-b-2 border-gray-200 pb-6">
			<h3 className="text-[24px] leading-[100%] font-medium font-display mb-6">
				{name}
			</h3>
			{description && <p className="mb-4 text-gray-600">{description}</p>}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 mb-6">
				{options.map(item => (
					<FilterCheckbox
						key={item.id}
						data={item}
						onToggle={onToggle}
						isSelected={selectedFilters.includes(item.id)}
					/>
				))}
			</div>
		</article>
	)
}

export default FilterSection
