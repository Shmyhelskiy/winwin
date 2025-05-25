/* eslint-disable react/prop-types */
import { FilterChooseOption } from '@/shared/api/types/Filter'

type FilterCheckboxProps = {
	data: FilterChooseOption
	onToggle: (id: string) => void
	isSelected: boolean
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
	data,
	onToggle,
	isSelected
}) => (
	<label className="relative flex items-center gap-4 group cursor-pointer">
		<input
			type="checkbox"
			checked={isSelected}
			onChange={() => onToggle(data.id)}
			className="w-6 h-6"
		/>
		<span>{data.name}</span>

		{data.description && (
			<span className="absolute left-36 top-7 ml-2 w-64 p-2 text-sm text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
				{data.description}
			</span>
		)}
	</label>
)
