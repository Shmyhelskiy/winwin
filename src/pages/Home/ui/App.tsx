import { useTranslation } from 'react-i18next'

import FilterModalForm from '../../../components/filterModal/FilterModalForm'
import { useFilterModalStore } from '../../../state/useFilterModalStore'
import { useFilterStore } from '../../../state/useFilterStore'

export const App = () => {
	const { t } = useTranslation('filter')
	const { open } = useFilterModalStore()
	const { selectedFilters } = useFilterStore()

	return (
		<section className="w-full h-dvh flex items-center justify-center flex-col">
			<h1 className="text-6xl text-gray-600 mb-12">{t('homePage.title')}</h1>
			<button
				className="p-5 flex justify-center text-5xl bg-blue-400 hover:bg-blue-600 hover:text-white rounded-2xl cursor-pointer"
				onClick={open}
			>
				{t('homePage.chosenFilters')}
			</button>
			<article className="felx gap-2 pt-2">
				<h2 className="text-bold text-2xl">{t('homePage.chosenFilters')}</h2>
				{selectedFilters.map((item, index) => (
					<p key={`${item}-${index}`}>{item}</p>
				))}
			</article>
			<FilterModalForm />
		</section>
	)
}
