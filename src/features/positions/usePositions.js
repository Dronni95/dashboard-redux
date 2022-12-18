import { selectVisiblePositions } from './positionSlice'
import { selectFilters } from 'features/filters/filterSlice'
import { useSelector } from 'react-redux'

export const usePositions = () => {
	const currentFilters = useSelector(selectFilters)

	const positions = useSelector(state =>
		selectVisiblePositions(state, currentFilters)
	)

	return positions
}
